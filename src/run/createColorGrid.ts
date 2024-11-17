import {createElement} from "./createElement.ts";
import {createColorTile} from "./createColorTile.ts";

type CreateColorGridArgs = {
    hues: string[][];
    onColorClicked: (color: string) => void;
};

export function createColorGrid(args: CreateColorGridArgs): HTMLElement {
    const colorGrid = createElement(`<div style="display: flex; justify-content: center; gap: 2px;"></div>`);

    for (const hue of args.hues) {

        const colorColumn = createElement(`<div style="display: flex; flex-direction: column; gap: 2px;"></div>`);
        colorGrid.append(colorColumn);

        for (const saturation of hue) {
            const container = createElement(`<div></div>`);
            const tile = createColorTile({color: saturation, onClick: () => args.onColorClicked(saturation)});
            container.append(tile);
            colorColumn.append(container);
        }
    }

    if (colorGrid instanceof HTMLElement) {
        return colorGrid;
    }

    throw new Error('Invalid Color Grid HTML!');
}