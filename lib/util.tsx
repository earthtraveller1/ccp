export function format(n: string | number): string {
    return ("00" + n).slice(-2);
}

export function find(tag: string, html: string): string[] {
    const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "gi");
    const matches = html.matchAll(regex);
    const result: string[] = [];

    for (const match of matches) {
        result.push(match[1]);
    }

    return result;
}
