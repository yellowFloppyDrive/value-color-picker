import {createElement} from "./createElement.ts";
import {createColorTile} from "./createColorTile.ts";
import {VALUES} from "../data/VALUES.ts";

type CreateValuePickerArgs = {
    onClick: (i: number) => void;
};

export function createValuePicker(args: CreateValuePickerArgs): HTMLElement {
    const valuePicker = createElement(`
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 2%;"></div>
    `);

    for (let i = 0; i < VALUES.length; i++) {
        const container = createElement(`<div></div>`);
        const tile = createColorTile({color: VALUES[i], onClick: () => args.onClick(i)});

        container.append(tile);

        valuePicker.append(container);
    }

    if (valuePicker instanceof HTMLElement) {
        return valuePicker;
    }

    throw new Error('Invalid value picker HTML!');
}