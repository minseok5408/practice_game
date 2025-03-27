export class AudioManager {
  constructor() {
    this.bgm = document.getElementById("bgm");
  }

  playBGM() {
    if (this.bgm.paused) {
      this.bgm.currentTime = 0;
      this.bgm.play();
    }
  }

  stopBGM() {
    this.bgm.pause();
    this.bgm.currentTime = 0;
  }
}
