export async function loadText(url: string) {
    return await (await fetch(url)).text()
}

export async function loadJson(url: string) {
    return await (await fetch(url)).json()
}

export function equal(a: any, b: any): boolean {
    return JSON.stringify(a) == JSON.stringify(b);
}

export function clone<T extends any | unknown>(a: T): T {
    if (a === undefined) return a;
    return JSON.parse(JSON.stringify(a));
}

export function shortenString(s: string, maxLength = 100): string {
    return s && s.length > maxLength - 3 ? `${s.substr(0, maxLength - 3)}...` : s;
}

function _log(f = console.log, message: string, ...data: any[]){
    f.apply(console, [message, ...(data.map(o => shortenString(JSON.stringify(o))))]);
}

function _logRaw(f = console.log, message: string, ...data: any[]){
    f.apply(console, [message, ...(data.map(o => JSON.stringify(o, undefined, ' ')))]);
}

export function log<T>(message: string, o?: T, ...rest: any[]): T | undefined {
    _log(console.log, message, [o, ...rest]);
    return o;
}

export function logRaw<T>(message: string, o: T, ...rest: any[]): T {
    _logRaw(console.log, message, [o, ...rest]);
    return o;
}

export function warn<T>(message: string, o?: T, ...rest: any[]): T | undefined {
    _log(console.warn, message, [o, ...rest]);
    return o;
}

export function error(message: string, ...data: any[]): never {
    _log(console.error, message, ...data);
    throw new Error(message);
}

export function load(key: string, defaultValue = undefined): any {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : defaultValue;
}

export function loadAll(...keys: string[]): any {
    const result = Object.create(null);
    for (const key of keys) {
        result[key] = load(key)!;
    }
    return result;
}

export function store(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
}
