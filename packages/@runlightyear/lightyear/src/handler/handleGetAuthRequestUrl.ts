import { handlerResult } from "./handlerResult";
import { unsubscribe } from "../subscriptionActivities";
import { getWebhookData } from "../base/webhook";
import { oAuthIndex } from "../base/oauth";
import { OAuthConnector } from "../connectors/OAuthConnector";
import { getAuthData, updateAuthDataState } from "../base/auth";
import invariant from "tiny-invariant";

export interface HandleGetAuthRequestUrl {
  customApp: string;
  authName: string;
}

export async function handleGetAuthRequestUrl({
  customApp,
  authName,
}: HandleGetAuthRequestUrl) {
  if (!customApp) {
    return handlerResult(400, "Missing customApp");
  }

  const item = oAuthIndex[customApp];

  await updateAuthDataState({ customAppName: customApp, authName });

  const authData = await getAuthData({ customAppName: customApp, authName });

  invariant(authData.customAppData, "Missing customAppData");
  invariant(authData.customAppData.oAuthConfigData, "Missing oAuthConfigData");

  let connector: OAuthConnector;

  connector = item({
    customAppName: customApp,
    oauthConfigData: authData.customAppData.oAuthConfigData,
    authData,
  });

  const authRequestUrl = connector.getAuthRequestUrl();

  return handlerResult(200, "Success", { authRequestUrl });
}
