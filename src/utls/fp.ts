export async function tryPromise<T>(fn: () => Promise<T>, defaultValue: T): Promise<T> {
  let r;
  try {
    do {
      r = await fn();
    } while (r instanceof Promise);
    return r;
  } catch (e) {
    return defaultValue;
  }
}