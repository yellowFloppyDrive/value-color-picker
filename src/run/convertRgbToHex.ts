export function convertRgbToHex(rgb: string): undefined | string {
    const matches = rgb.match(/rgb\((\d+), (\d+), (\d+)\)/);

    if (matches) {
        const r = Math.round(parseFloat(matches[1]));
        const g = Math.round(parseFloat(matches[2]));
        const b = Math.round(parseFloat(matches[3]));

        const rHex = r.toString(16).padStart(2, '0');
        const gHex = g.toString(16).padStart(2, '0');
        const bHex = b.toString(16).padStart(2, '0');

        return `#${rHex}${gHex}${bHex}`;
    }
}
