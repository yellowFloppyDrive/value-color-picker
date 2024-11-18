import './style.css'
import {createColorPicker} from "./run/createColorPicker.ts";
import {Data} from "./type/Data.ts";
import {whenValueClicked} from "./when/whenValueClicked.ts";
import {createValueColorToggleButton} from "./run/createValueColorToggleButton.ts";
import {whenColorClicked} from "./when/whenColorClicked.ts";
import {createElement} from "./run/createElement.ts";

export function createPage(colorPicker: HTMLElement): Element {
    const page = createElement(`
        <div style="max-width: 1425px; margin: auto; padding-top: 5rem; display: flex; flex-direction: column; gap: 1.5rem;">
            <div data-component="buttons-container"></div>
            <div data-component="color-picker-container"></div>
        </div>
    `);

    const buttonsContainer = page.querySelector('[data-component="buttons-container"]');

    if (buttonsContainer instanceof Element) {
        const valueColorToggleButton = createValueColorToggleButton();
        buttonsContainer.append(valueColorToggleButton);
    }

    const colorPickerContainer = page.querySelector('[data-component="color-picker-container"]');

    if (colorPickerContainer instanceof Element) {
        colorPickerContainer.append(colorPicker);
    }

    return page;
}

function main(): void {
    let data: Data;

    const colorPicker = createColorPicker({
        initValue: 4,
        onValueClicked: (i) => whenValueClicked(i, data),
        onColorClicked: color => whenColorClicked(color, data),
    });

    const page = createPage(colorPicker);
    document.body.append(page);

    data = {
        colorPicker,
    };
}

main();

