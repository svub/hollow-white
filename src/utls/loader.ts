import { error, log, waitFor } from "@/shared/util";

type Options = {
  retries: number;
  timeout: number;
  startImmediately?: boolean;
}

const defaults: Options = {
  retries: 3,
  timeout: 3000,
  startImmediately: false,
};

export type Result = {
  url: string;
  blob?: Blob;
  error?: Error;
}

export type Error = {
  message: string;
  reason: any;
  abort?: boolean;
}
export function isError(element: any): element is Error {
  return (element as Error)?.message !== undefined;
}

export class Loader {
  private urls: string[];
  private results = new Map<string, Result>();
  private options: Options;
  private listening: ((result?: Result) => void)[] = [];
  cancelled = false;

  constructor(urls: string[], options?: Partial<Options>) {
    if (urls.length < 1) error('No URLs provided.');
    this.urls = urls;
    this.options = { ...defaults, ...options };

    if (options?.startImmediately) this.start();
  }

  get(url: string) {
    return new Promise<Blob>((resolve, reject) => {
      const callback = (result?: Result) => {
        if (this.cancelled) {
          reject({ url, text: "Downloading cancelled." });
        } else if (result && result.url === url) {
          this.listening.splice(this.listening.indexOf(callback), 1);
          if (result.blob) {
            resolve(result.blob);
          } else {
            reject(result.error);
          }
        }
      }
      this.listening.push(callback);
      callback(this.results.get(url));
    });
  }

  private notify(result?: Result) {
    this.listening.forEach(callback => callback(result));
  }

  async start() {
    // const url = this.urls[this.current];
    for (const url of this.urls) {
      let result: Result;
      try {
        const blob = await this.loadAndRetry(url);
        result = { url, blob };
      } catch (error) {
        if (isError(error))
          result = { url, error };
        else
          result = { url, error: { message: "Loading failed for an unknown reason. ", reason: error } };
      }
      this.results.set(url, result);
      this.notify(result);
      log(`Loader.start: finished ${this.results.size} of ${this.urls.length}, finished ${url} with ${result.blob ? `${result.blob.size} bytes` : 'an error'}.`, result);
    }
  }

  cancel() {
    log("Loader.cancel: cancelled.");
    this.cancelled = true;
    this.notify();
    // TODO use AbortController to cancel ongoing downloads https://developer.mozilla.org/en-US/docs/Web/API/AbortController
  }

  async loadAndRetry(url: string): Promise<Blob> {
    let retry = 0;
    while (retry <= this.options.retries) {
      try {
        return await this.load(url);
      } catch (reason) {
        if (isError(reason)) {
          if (reason.abort) {
            return Promise.reject(reason);
          }
        }
        if (retry >= this.options.retries) {
          return Promise.reject({ message: `Loader.loadAndRetry: failed after ${this.options.retries} retries.`, reason });
        }
      }
      await waitFor(this.options.timeout);
      retry++;
    }
    return Promise.reject({ message: 'Loader.loadAndRetry: the impossible error!', reason: false });
  }

  async load(url: string): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      const nope = (message, reason, more?) => reject({ message, reason, ...more } as Error);
      try {
        const p = fetch(url)
          .then(response => {
            if (!response.ok) {
              log('Loader.load: fetch !ok; url, status, text', url, response.status, response.statusText);
              const reason = { status: response.status, text: response.statusText };
              if (response.status === 404) {
                return nope('Resource does not exists. 404.', reason, { abort: true });
              }
              return nope('Loading failed.', reason);
            }
            response.blob()
              .then(blob => {
                // make sure the file is loaded completely
                blob.arrayBuffer()
                  .then(() => resolve(blob))
                  .catch(reason => nope('Loader.load: fetch failed (catch)', reason))
              })
              .catch(reason => nope('Loader.load: failed to load blob', reason))
          })
          .catch(reason => nope('Loader.load: fetch failed (catch)', reason))
      } catch (reason) {
        nope('Loader.load: fetch failed (try)', reason);
      }
    });
  }
} 