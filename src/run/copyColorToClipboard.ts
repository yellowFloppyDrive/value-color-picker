import {triggerCopiedToClipboardNotification} from "./triggerCopiedToClipboardNotification.ts";
import {convertRgbToHex} from "./convertRgbToHex.ts";

export async function copyColorToClipboard(rgbColor: string): Promise<void> {
    const hexColor = convertRgbToHex(rgbColor);

    if (hexColor) {
        await navigator.clipboard.writeText(hexColor);
        triggerCopiedToClipboardNotification();
    } else {
        alert('Something went wrong. Could not copy color!');
    }
}