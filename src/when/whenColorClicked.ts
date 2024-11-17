import {Data} from "../type/Data.ts";
import {copyColorToClipboard} from "../run/copyColorToClipboard.ts";

export function whenColorClicked(color: string, _: Data): void {
    void copyColorToClipboard(color);
}