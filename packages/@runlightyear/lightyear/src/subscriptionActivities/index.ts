import {
  SubscribeFuncProps,
  subscribeIndex,
  UnsubscribeFuncProps,
  unsubscribeIndex,
} from "../base/webhook";
import { setSubscribeProps } from "../base/subscription";
import { getDeployData, getDeployList } from "../base/deploy";

export interface SubscribePropsProps {
  envName: string;
}

export async function subscribeProps(props: SubscribePropsProps) {
  const { envName } = props;

  const deployData = await getDeployData();

  const deployList = getDeployList();
  for (const item of deployList) {
    if (item.type === "webhook") {
      const { webhookProps } = item;
      if (!webhookProps) {
        throw new Error("Missing webhookProps");
      }

      if (
        webhookProps.subscribe ||
        webhookProps.unsubscribe ||
        webhookProps.subscribeProps
      ) {
        if (!webhookProps.subscribeProps) {
          throw new Error(
            `Missing subscribeProps for webhook ${webhookProps.name}`
          );
        }
        if (!webhookProps.subscribe) {
          throw new Error(`Missing subscribe for webhook ${webhookProps.name}`);
        }
        if (!webhookProps.unsubscribe) {
          throw new Error(
            `Missing unsubscribe for webhook ${webhookProps.name}`
          );
        }
      }

      if (webhookProps.subscribeProps) {
        const webhookData = deployData.webhooks[webhookProps.name];
        const subscribePropsResult = await webhookProps.subscribeProps(
          webhookData
        );
        await setSubscribeProps(
          envName,
          webhookProps.name,
          subscribePropsResult
        );
      }
    }
  }
}

export async function unsubscribe(
  webhookName: string,
  unsubscribeFuncProps: UnsubscribeFuncProps
) {
  const fn = unsubscribeIndex[webhookName];
  if (!fn) {
    console.error(`Unknown webhook: ${webhookName}`);
  }

  await fn(unsubscribeFuncProps);
}

export async function subscribe(
  webhookName: string,
  subscribeFuncProps: SubscribeFuncProps
) {
  const fn = subscribeIndex[webhookName];
  if (!fn) {
    console.error(`Unknown subscription: ${webhookName}`);
  }

  return await fn(subscribeFuncProps);
}
