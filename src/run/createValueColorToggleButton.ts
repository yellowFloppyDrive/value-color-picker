import {createElement} from "./createElement.ts";

export function createValueColorToggleButton(): HTMLButtonElement {
    const grayscaleButton = createElement(`<button>Toggle values/colors</button>`);

    if (grayscaleButton instanceof HTMLElement) {
        grayscaleButton.onclick = () => {
            let blendLayer = document.body.querySelector('[data-component="value-color-blend-layer"]');
            if (blendLayer) {
                blendLayer.remove();
            } else {
                blendLayer = createElement(`<div data-component="value-color-blend-layer" style="pointer-events: none; position: fixed; top: 0; right: 0; bottom: 0; left: 0; mix-blend-mode: color; background: #fff;"></div>`);
                document.body.append(blendLayer);
            }
        }
    }

    if (grayscaleButton instanceof HTMLButtonElement) {
        return grayscaleButton;
    }

    throw new Error('Invalid Value Color Toggle Button HTML!');
}