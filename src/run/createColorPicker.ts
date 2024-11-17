import {createElement} from "./createElement.ts";
import {createColorGrid} from "./createColorGrid.ts";
import {createValuePicker} from "./createValuePicker.ts";
import {COLORS_BY_VALUE} from "../data/COLORS_BY_VALUE.ts";
import {updateBackgroundColorToValue} from "../when/whenValueClicked.ts";

type CreateColorPickerArgs = {
    initValue: number;
    onValueClicked: (i: number) => void;
    onColorClicked: (color: string) => void;
};

export function createColorPicker(args: CreateColorPickerArgs): HTMLElement {
    const colorPicker = createElement(`
        <div style="margin-top: 50px;">
            <div style="display: flex; align-items: flex-start; gap: 20px; justify-content: center;">
                <div data-component="color-grid-container"></div>
                <div data-component="value-picker-container"></div>
            </div>        
        </div>
    `);

    const colorGridContainer = colorPicker.querySelector('[data-component="color-grid-container"]');

    if (colorGridContainer instanceof Element) {
        const colorGrid = createColorGrid({
            hues: COLORS_BY_VALUE[args.initValue],
            onColorClicked: color => args.onColorClicked(color),
        });

        updateBackgroundColorToValue(args.initValue);

        colorGridContainer.append(colorGrid);
    }

    const valuePickerContainer = colorPicker.querySelector('[data-component="value-picker-container"]');

    if (valuePickerContainer instanceof Element) {
        const valuePicker = createValuePicker({onClick: args.onValueClicked});
        valuePickerContainer.append(valuePicker);
    }

    if (colorPicker instanceof HTMLElement) {
        return colorPicker;
    }

    throw new Error('Invalid Color Picker HTML!');
}