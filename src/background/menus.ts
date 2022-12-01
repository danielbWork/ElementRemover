import browser, { menus, Menus, Tabs } from "webextension-polyfill";
import { sendMessageToContent } from "./messaging";

const REMOVE_ITEM_ID = "remove-item";

/**
 * Loads menu items and their actions
 */
export function loadMenusHandler() {
  const contexts: Menus.ContextType[] = [
    "audio",
    "editable",
    "frame",
    "image",
    "link",
    "page",
    "password",
    "video",
  ];

  const documentUrlPatterns = ["https://*/*", "http://*/*"];

  menus.create({
    id: REMOVE_ITEM_ID,
    title: "Remove element",
    documentUrlPatterns,
    contexts,
  });

  menus.onClicked.addListener(onContextMenuClick);
}

function onContextMenuClick(info: Menus.OnClickData, tab?: Tabs.Tab) {
  if (info.menuItemId === REMOVE_ITEM_ID) {
    sendMessageToContent(tab?.id || 0, {
      elementId: info.targetElementId,
    });
  }
}
