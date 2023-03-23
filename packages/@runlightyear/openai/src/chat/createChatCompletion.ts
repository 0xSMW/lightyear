import { ChatMessage } from "../types/ChatMessage";
import { HttpProxyResponse } from "@runlightyear/lightyear";
import { OpenAI } from "../OpenAI";

export interface CreateChatCompletionProps {
  /**
   * ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.
   */
  model: string;

  /**
   * The messages to generate chat completions for, in the chat format.
   */
  messages: Array<ChatMessage>;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   *
   * We generally recommend altering this or top_p but not both.
   *
   * Defaults to 1
   */
  temperature?: number;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   *
   * Defaults to 1
   */
  topP?: number;

  /**
   * How many chat completion choices to generate for each input message.
   *
   * Defaults to 1
   */
  n?: number;

  /**
   * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: [DONE] message. See the OpenAI Cookbook for example code.
   *
   * Defaults to false
   */
  stream?: boolean;

  /**
   * Up to 4 sequences where the API will stop generating further tokens.
   *
   * Defaults to null
   */
  stop?: string;

  /**
   * The maximum number of tokens to generate in the chat completion.
   *
   * The total length of input tokens and generated tokens is limited by the model's context length.
   *
   * Defaults to inf
   */
  maxTokens?: number;

  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
   *
   * See more information about frequency and presence penalties.
   *
   * Defaults to 0
   */
  presencePenalty: number;

  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
   *
   * See more information about frequency and presence penalties.
   *
   * Defaults to 0
   */
  frequencyPenalty?: number;

  /**
   * Defaults to null
   * Modify the likelihood of specified tokens appearing in the completion.
   *
   * Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
   */
  logitBias: object;

  /**
   *   A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.
   */
  user?: string;
}

export interface CreateChatCompletionResponse extends HttpProxyResponse {
  data: {
    id: string;
    object: "chat.completion";
    created: number;
    choices: Array<{
      index: number;
      message: ChatMessage;
      finishReason: string;
    }>;
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
  };
}

export const createChatCompletion =
  (self: OpenAI) =>
  async (
    props: CreateChatCompletionProps
  ): Promise<CreateChatCompletionResponse> => {
    const {
      model,
      messages,
      temperature,
      topP,
      n,
      stream,
      stop,
      maxTokens,
      presencePenalty,
      frequencyPenalty,
      logitBias,
      user,
    } = props;

    return self.post({
      url: "/chat/completions",
      data: {
        model,
        messages,
        temperature,
        top_p: topP,
        n,
        stream,
        stop,
        max_tokens: maxTokens,
        presence_penalty: presencePenalty,
        frequency_penalty: frequencyPenalty,
        logit_bias: logitBias,
        user,
      },
    });
  };
