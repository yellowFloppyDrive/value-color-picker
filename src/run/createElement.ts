export function createElement(markup: string): Element {
    const div = document.createElement("div");

    div.innerHTML = markup;

    const element = div.firstElementChild;

    if (element) {
        return element;
    }

    throw new Error("HTML is invalid");
}