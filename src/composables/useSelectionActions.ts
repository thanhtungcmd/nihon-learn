import { onBeforeUnmount, onMounted, ref } from 'vue';

export interface UseSelectionActionsOptions {
  onAction?: (selectedText: string) => void | Promise<void>;
  shortcutKey?: string;
}

function getSelectionText(): string {
  return window.getSelection()?.toString().trim() ?? '';
}

export function useSelectionActions(options: UseSelectionActionsOptions = {}) {
  const showContextMenu = ref(false);
  const contextMenuStyle = ref({ top: '0px', left: '0px' });

  const handleSelectionShortcut = (event: KeyboardEvent) => {
    const key = options.shortcutKey ?? 'k';
    const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === key.toLowerCase();

    if (!isShortcut) return;

    const selectedText = getSelectionText();
    if (!selectedText) return;

    event.preventDefault();
    void options.onAction?.(selectedText);
  };

  const handleContextMenu = (event: MouseEvent) => {
    const selection = getSelectionText();
    if (!selection) return;

    event.preventDefault();
    event.stopPropagation();
    contextMenuStyle.value = {
      top: `${event.clientY}px`,
      left: `${event.clientX}px`,
    };
    showContextMenu.value = true;
  };

  const closeContextMenu = (event?: MouseEvent) => {
    if (event?.button === 2) return;
    showContextMenu.value = false;
  };

  const runSelectedAction = (text = getSelectionText()) => {
    if (!text) return;

    showContextMenu.value = false;
    void options.onAction?.(text);
  };

  onMounted(() => {
    window.addEventListener('keydown', handleSelectionShortcut);
    window.addEventListener('click', closeContextMenu);
    window.addEventListener('contextmenu', handleContextMenu);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleSelectionShortcut);
    window.removeEventListener('click', closeContextMenu);
    window.removeEventListener('contextmenu', handleContextMenu);
  });

  return {
    showContextMenu,
    contextMenuStyle,
    closeContextMenu,
    handleContextMenu,
    runSelectedAction,
  };
}
