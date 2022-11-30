import { ContentMessageType } from "../MessageTypes/ContentMessageType";
import browser from "webextension-polyfill";

/**
 * Loads messaging handler
 */
export function loadMessagingHandler() {
  // TODO Add Handling
}

/**
 * Sends a message to the content script
 * @param tabId The id of the current tab which we want to send the message to
 * @param type The type of message we want to send
 * @param data The data for the message
 * @returns The message promise incase the caller needs the results
 */
export function sendMessageToContent(
  tabId: number,
  type: ContentMessageType,
  data: any
) {
  return browser.tabs.sendMessage(tabId, { type, data });
}
