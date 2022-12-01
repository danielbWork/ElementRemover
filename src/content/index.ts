import browser from "webextension-polyfill";

/**
 * Handles receiving messages from background script
 * @param message The message we receive
 */
function handleMessage(message: any) {
  const { data } = message;

  if (data?.elementId) {
    const element = browser.menus.getTargetElement(data.elementId);

    element?.remove();
  }
}

browser.runtime.onMessage.addListener(handleMessage);
