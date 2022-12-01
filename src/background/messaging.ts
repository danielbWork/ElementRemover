import browser from "webextension-polyfill";

/**
 * Sends a message to the content script
 * @param tabId The id of the current tab which we want to send the message to
 * @param data The data for the message
 * @returns The message promise incase the caller needs the results
 */
export function sendMessageToContent(tabId: number, data: any) {
  return browser.tabs.sendMessage(tabId, { data });
}
