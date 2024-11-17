import {createElement} from "./createElement.ts";

export function triggerCopiedToClipboardNotification(): void {
    const colorCopiedNotification = createElement(`
        <div style="display: grid; place-items: center; position: fixed; top: 0; right: 0; bottom: 0; left: 0; backdrop-filter: blur(30px); z-index: 10;">
            <p>Color copied to clipboard</p>
        </div>
    `);

    document.body.append(colorCopiedNotification);

    setTimeout(() => {
        colorCopiedNotification.remove();
    }, 400);
}