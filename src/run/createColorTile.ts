import {createElement} from "./createElement.ts";

type CreateColorTileArgs = {
    color: string,
    onClick: () => void
};

export function createColorTile(args: CreateColorTileArgs): HTMLButtonElement {
    const TILE_SIZE = '32px';

    const tile = createElement(`
        <button
            style="width: ${TILE_SIZE}; height: ${TILE_SIZE}; background-color: ${args.color};" 
            class="color-tile"
        ></button>
    `);

    if (tile instanceof HTMLButtonElement) {
        tile.onclick = () => args.onClick();

        return tile;
    }

    throw new Error('Invalid Tile HTML!');
}