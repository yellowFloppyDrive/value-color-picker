import {createElement} from "./createElement.ts";

export function createValueColorToggleButton(): HTMLButtonElement {
    const grayscaleButton = createElement(`<button>Toggle values/colors</button>`);
    if (grayscaleButton instanceof HTMLElement) {
        grayscaleButton.onclick = () => {
            document.body.style.filter = document.body.style.filter ? '' : 'grayscale(100%)';
        }
    }

    if (grayscaleButton instanceof HTMLButtonElement) {
        return grayscaleButton;
    }

    throw new Error('Invalid Value Color Toggle Button HTML!');
}