import {createElement} from "./createElement.ts";

export function createValueColorToggleButton(): HTMLButtonElement {
    const grayscaleButton = createElement(`
        <button class="button" style="position: relative; z-index: 20; color: rgb(0, 0, 0, 0.8); background: rgb(0, 0, 0, 0.3);">Show values</button>
    `);

    if (grayscaleButton instanceof HTMLElement) {
        grayscaleButton.onclick = () => {
            let blendLayer = document.body.querySelector('[data-component="value-color-blend-layer"]');

            if (blendLayer) {
                blendLayer.remove();
                grayscaleButton.innerText = 'Show values';
            } else {
                blendLayer = createElement(`<div data-component="value-color-blend-layer" style="pointer-events: none; position: fixed; top: 0; right: 0; bottom: 0; left: 0; mix-blend-mode: color; background: #fff;"></div>`);
                document.body.append(blendLayer);

                grayscaleButton.innerText = 'Show colors';
            }
        };
    }

    if (grayscaleButton instanceof HTMLButtonElement) {
        return grayscaleButton;
    }

    throw new Error('Invalid Value Color Toggle Button HTML!');
}