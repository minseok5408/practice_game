import { PLAYER_CONFIG } from "../config.js";

export class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = PLAYER_CONFIG.width;
    this.height = PLAYER_CONFIG.height;
    this.speed = PLAYER_CONFIG.speed;
    this.color = PLAYER_CONFIG.color;
    this.reset();
  }

  reset() {
    this.x = this.canvas.width / 2 - this.width / 2;
    this.y = this.canvas.height - PLAYER_CONFIG.initialY;
    this.dx = 0;
    this.dy = 0;
  }

  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        this.dx = -this.speed;
        break;
      case "ArrowRight":
        this.dx = this.speed;
        break;
      case "ArrowUp":
        this.dy = -this.speed;
        break;
      case "ArrowDown":
        this.dy = this.speed;
        break;
    }
  }

  handleKeyUp(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") this.dx = 0;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") this.dy = 0;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // 경계 체크
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > this.canvas.width)
      this.x = this.canvas.width - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > this.canvas.height)
      this.y = this.canvas.height - this.height;
  }

  draw(ctx) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
