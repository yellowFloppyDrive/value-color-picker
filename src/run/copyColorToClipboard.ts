import {triggerCopiedToClipboardNotification} from "./triggerCopiedToClipboardNotification.ts";

export async function copyColorToClipboard(color: string): Promise<void> {
    await navigator.clipboard.writeText(color);
    triggerCopiedToClipboardNotification();
}