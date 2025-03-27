import { SCORE_CONFIG } from "../config.js";

export class GameManager {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.isGameOver = false;
    this.isGameStarted = false;
  }

  checkCollision(player, stars) {
    for (let star of stars) {
      const dx = player.x + player.width / 2 - star.x;
      const dy = player.y + player.height / 2 - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < player.width / 2 + star.radius) {
        this.isGameOver = true;
        return true;
      }
    }
    return false;
  }

  reset() {
    this.score = 0;
    this.isGameOver = false;
  }

  shouldIncreaseDifficulty() {
    return (
      this.score % SCORE_CONFIG.difficultyIncrease === 0 && this.score !== 0
    );
  }
}
