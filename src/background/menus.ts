import browser, { menus, Menus, Tabs } from "webextension-polyfill";

const PARENT_ITEM_ID = "page-editor-parent";
// TODO check if i should add a highlight option
const REMOVE_ITEM_ID = "remove-item";
const EDIT_ITEM_ID = "edit-item";

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
    id: PARENT_ITEM_ID,
    title: "PageEditor Commands",
    documentUrlPatterns,
    contexts,
  });

  menus.create({
    id: REMOVE_ITEM_ID,
    title: "Remove element",
    documentUrlPatterns,
    contexts,
    parentId: PARENT_ITEM_ID,
  });

  menus.create({
    id: EDIT_ITEM_ID,
    title: "Edit element",
    documentUrlPatterns,
    contexts,
    parentId: PARENT_ITEM_ID,
  });

  menus.onClicked.addListener(onContextMenuClick);
}

function onContextMenuClick(info: Menus.OnClickData, tab?: Tabs.Tab) {
  if (info.menuItemId === REMOVE_ITEM_ID) {
  }

  if (info.menuItemId === EDIT_ITEM_ID) {
  }

  console.log(info);
  console.log(tab);
}
