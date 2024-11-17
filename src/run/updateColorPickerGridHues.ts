import {createColorGrid} from "./createColorGrid.ts";

type UpdateColorPickerGridHuesArgs = {
    hues: string[][];
    colorPicker: HTMLElement;
    onColorClicked: (color: string) => void;
};

export function updateColorPickerGridHues(args: UpdateColorPickerGridHuesArgs): void {
    args.colorPicker.querySelectorAll('[data-component="color-grid-container"]').forEach(colorGridContainer => {
        const colorGrid = createColorGrid({
            hues: args.hues,
            onColorClicked: args.onColorClicked,
        });

        const firstChild = colorGridContainer.firstElementChild;

        if (firstChild) {
            firstChild.replaceWith(colorGrid);
        } else {
            colorGridContainer.append(colorGrid);
        }
    });
}