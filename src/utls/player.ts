import { error, log } from "@/shared/util";

export default class Player {
  private audio: HTMLAudioElement;
  private list: string[] = [];
  private current = 0;
  private folder: string;

  constructor(rootFolder: string, autoplay = true) {
    this.audio = new Audio();
    this.audio.autoplay = autoplay;
    this.audio.addEventListener('ended', () => {
      if (this.current < this.list.length -1){
        this.current++
        this.play();
      }
    });
    this.audio.addEventListener('error', () => {
      error('Error playing audio:', this.list[this.current], this.audio.src);
    });
    this.folder = rootFolder;
  }

  set playlist(list: string[]) {
    this.current = 0
    this.list = list;
    if (this.audio.autoplay) this.play();
    else this.pause();
  }

  set speed(factor: number) {
    this.audio.playbackRate = factor;
  }

  async play() {
    this.audio.src = this.folder + this.list[this.current];
    log('Player.play', this.audio.src);
    if (!this.audio.autoplay) await this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  toggle() {
    if (this.playing) this.pause();
    else this.play();
  }

  get playing() {
    return !this.audio.paused
  }
}