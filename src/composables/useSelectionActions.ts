import { onBeforeUnmount, onMounted, ref } from 'vue';

export interface UseSelectionActionsOptions {
  onAction?: (selectedText: string) => void | Promise<void>;
  shortcutKey?: string;
}

type SelectionAction = (selectedText: string) => void | Promise<void>;

const showContextMenu = ref(false);
const contextMenuStyle = ref({ top: '0px', left: '0px' });
const selectedText = ref('');
let currentAction: SelectionAction | undefined;
let currentShortcut = 'k';
let listenersAttached = false;

function getSelectionText(): string {
  return window.getSelection()?.toString().trim() ?? '';
}

function handleSelectionShortcut(event: KeyboardEvent) {
  const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === currentShortcut.toLowerCase();
  if (!isShortcut) return;

  const text = getSelectionText();
  if (!text || !currentAction) return;

  selectedText.value = text;
  event.preventDefault();
  void currentAction(text);
}

function handleContextMenu(event: MouseEvent) {
  const selection = getSelectionText();
  if (!selection) return;

  selectedText.value = selection;
  event.preventDefault();
  event.stopPropagation();
  contextMenuStyle.value = {
    top: `${event.clientY}px`,
    left: `${event.clientX}px`,
  };
  showContextMenu.value = true;
}

function closeContextMenu(event?: MouseEvent) {
  if (event?.button === 2) return;
  showContextMenu.value = false;
}

function attachGlobalListeners() {
  if (listenersAttached) return;

  window.addEventListener('keydown', handleSelectionShortcut);
  window.addEventListener('click', closeContextMenu);
  window.addEventListener('contextmenu', handleContextMenu);
  listenersAttached = true;
}

export function useSelectionActions(options: UseSelectionActionsOptions = {}) {
  onMounted(() => {
    if (options.onAction) {
      currentAction = options.onAction;
    }

    if (options.shortcutKey) {
      currentShortcut = options.shortcutKey;
    }

    attachGlobalListeners();
  });

  onBeforeUnmount(() => {
    if (options.onAction && currentAction === options.onAction) {
      currentAction = undefined;
    }
  });

  const runSelectedAction = (text = selectedText.value || getSelectionText()) => {
    const actionText = text || selectedText.value || getSelectionText();
    if (!actionText || !currentAction) return;

    selectedText.value = actionText;
    showContextMenu.value = false;
    void currentAction(actionText);
  };

  return {
    showContextMenu,
    contextMenuStyle,
    selectedText,
    closeContextMenu,
    handleContextMenu,
    runSelectedAction,
  };
}
