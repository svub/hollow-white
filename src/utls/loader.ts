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

type Result = {
  url: string;
  blob?: Blob;
  error?: any;
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
        result = { url, error };
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
  }

  async loadAndRetry(url: string): Promise<Blob> {
    let retry = 0;
    while (retry <= this.options.retries) {
      try {
        return await this.load(url);
      } catch (error) {
        if (retry >= this.options.retries) {
          return Promise.reject(error);
        }
      }
      await waitFor(this.options.timeout);
      retry++;
    }
    return Promise.reject('Loader.loadAndRetry: the impossible error!');
  }

  async load(url: string): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      try {
        const p = fetch(url)
          .then(response => {
            if (response.status === 404) {
              reject('Resource does not exists. 404.');
            }
            if (!response.ok) {
              reject({ status: response.status, text: response.statusText });
            }
            response.blob()
              .then(blob => {
                // make sure the file is loaded completely
                blob.arrayBuffer()
                  .then(() => resolve(blob))
                  .catch(reason => reject({ text: 'Loader.load: fetch failed (catch)', reason }))
              })
              .catch(reason => reject({ text: 'Loader.load: failed to load blob', reason }))
          })
          .catch(reason => reject({ text: 'Loader.load: fetch failed (catch)', reason }))
      } catch (reason) {
        reject({ text: 'Loader.load: fetch failed (try)', reason });
      }
    });
  }
} 