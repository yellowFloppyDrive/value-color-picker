import './style.css'
import {createColorPicker} from "./run/createColorPicker.ts";
import {Data} from "./type/Data.ts";
import {whenValueClicked} from "./when/whenValueClicked.ts";
import {appendColorPickerToDocument} from "./run/appendColorPickerToDocument.ts";
import {createValueColorToggleButton} from "./run/createValueColorToggleButton.ts";
import {whenColorClicked} from "./when/whenColorClicked.ts";
import {appendValueColorToggleButtonToDocument} from "./run/appendValueColorToggleButtonToDocument.ts";

function main(): void {
    let data: Data;

    const colorPicker = createColorPicker({
        initValue: 4,
        onValueClicked: (i) => whenValueClicked(i, data),
        onColorClicked: color => whenColorClicked(color, data),
    });

    appendColorPickerToDocument(colorPicker);

    const valueColorToggleButton = createValueColorToggleButton();
    appendValueColorToggleButtonToDocument(valueColorToggleButton);

    data = {
        colorPicker,
    };
}

main();

