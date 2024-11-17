import {Data} from "../type/Data.ts";
import {COLORS_BY_VALUE} from "../data/COLORS_BY_VALUE.ts";
import {updateColorPickerGridHues} from "../run/updateColorPickerGridHues.ts";
import {whenColorClicked} from "./whenColorClicked.ts";
import {VALUES} from "../data/VALUES.ts";

export function updateBackgroundColorToValue(valueIndex: number): void {
    document.body.style.backgroundColor = VALUES[valueIndex];
}

export function whenValueClicked(i: number, data: Data): void {
    const hues = COLORS_BY_VALUE[i];

    updateColorPickerGridHues({
        hues,
        colorPicker: data.colorPicker,
        onColorClicked: color => whenColorClicked(color, data),
    });

    updateBackgroundColorToValue(i);
}