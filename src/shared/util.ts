export async function loadText(url: string) {
    return await (await fetch(url)).text()
}

export async function loadJson(url: string) {
    return await (await fetch(url)).json()
}

export function equal(a: any, b: any): boolean {
    return JSON.stringify(a) == JSON.stringify(b);
}

export function shortenString(s: string, maxLength = 100): string {
    return s && s.length > maxLength - 3 ? `${s.substr(0, maxLength - 3)}...` : s;
}

function _log(f = console.log, message: string, ...data: any[]){
    f.apply(console, [message, ...(data.map(o => shortenString(JSON.stringify(o))))]);
}

export function log(message: string, ...data: any[]) {
    _log(console.log, message, ...data);
}

export function warn(message: string, ...data: any[]) {
    _log(console.warn, message, ...data);
}

export function error(message: string, ...data: any[]): never {
    _log(console.error, message, ...data);
    throw new Error(message);
}

export function load(...keys: string[]): object {
    const result = Object.create(null);
    for (const key of keys) {
        result[key] = JSON.parse(localStorage.getItem(key)!);
    }
    return result;
}
