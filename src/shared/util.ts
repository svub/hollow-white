import { Book, ElementType, HasElements, Reference, hasElements, Element } from "@/shared/entities";

export async function loadText(url: string) {
  return await (await fetch(url)).text()
}

export async function loadJson(url: string) {
  return await (await fetch(url)).json()
}

export function equal<T>(a: T, b: T): boolean {
  return JSON.stringify(a) == JSON.stringify(b);
}

export function clone<T extends any | unknown>(a: T): T {
  if (a === undefined) return a;
  return JSON.parse(JSON.stringify(a));
}

export function shortenString(s: string, maxLength = 100): string {
  return s && s.length > maxLength - 3 ? `${s.substr(0, maxLength - 3)}...` : s;
}

function _log(f = console.log, message: string, ...data: any[]) {
  const time = Date.now().toString().split('').slice(-6).join('');
  f.apply(console, [time, message, ...(data.map(o => shortenString(JSON.stringify(o))))]);
}

function _logJson(f = console.log, message: string, ...data: any[]) {
  f.apply(console, [message, ...(data.map(o => JSON.stringify(o, undefined, ' ')))]);
}

export function log<T>(message: string, o: T, ...rest: any[]): T;
export function log<T>(message: string, ...rest: any[]): undefined;
export function log<T>(message: string, o: T, ...rest: any[]) {
  _log(console.log, message, [o, ...rest]);
  return o;
}

export function logJson<T>(message: string, o: T | undefined, ...rest: any[]): T | undefined {
  _logJson(console.log, message, [o, ...rest]);
  return o;
}

export function logRaw<T>(message: string, o: T, ...rest: any[]): T {
  console.log.apply(console, [message, o, ...rest]);
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

export function parseBool(string = 'false', otherValueOptions: string[] = []): boolean {
  return ['true', 'yes', 'on', 'enabled', '1', ...otherValueOptions].indexOf(string.trim().toLocaleLowerCase()) >= 0;
}

export async function waitFor(millis: number) {
  return new Promise(resolve => {
    setTimeout(resolve, millis);
  });
}

export type ElementReference<Type extends Element> = Reference & {
  element: Type;
}

export function getAllElements<Type extends Element>(book: Book, filterType?: ElementType): ElementReference<Type>[] {
  function findElements(chapterId: string, sectionId: string, has: HasElements) {
    const results: ElementReference<Type>[] = [];
    has.elements.forEach((element) => {
      if (hasElements(element)) {
        results.push(...findElements(chapterId, sectionId, element as HasElements));
      }
      if (filterType && element.type != filterType) return;
      results.push({
        chapterId,
        sectionId,
        element: element as Type,
      });
    });
    return results;
  }

  const elements: ElementReference<Type>[] = [];
  book.chapters.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      elements.push(...findElements(chapter.id, section.id, section));
    });
  });
  return elements;
}