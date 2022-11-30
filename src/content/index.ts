import { ContentMessageType } from "../MessageTypes/ContentMessageType";
import browser from "webextension-polyfill";

/**
 * Handles receiving messages from background script
 * @param message The message we receive
 */
function handleMessage(message: any) {
  const { type, data } = message;

  if (type === ContentMessageType.DELETE_ELEMENT) {
    const element = browser.menus.getTargetElement(data.elementId);

    element?.remove();
  }

  if (type === ContentMessageType.GET_ELEMENT_DATA) {
  }
}

browser.runtime.onMessage.addListener(handleMessage);
