import { STAR_CONFIG } from "../config.js";

export class StarSystem {
  constructor() {
    this.stars = [];
    this.starSpeed = STAR_CONFIG.baseSpeed;
    this.starTypes = STAR_CONFIG.types;
  }

  spawn(canvas) {
    const type =
      this.starTypes[Math.floor(Math.random() * this.starTypes.length)];
    const x = Math.random() * (canvas.width - 20) + 10;
    this.stars.push({
      x,
      y: 0,
      radius: type.radius,
      color: type.color,
      speed: this.starSpeed * type.speedMultiplier,
    });
  }

  update(canvas) {
    this.stars.forEach((star) => (star.y += star.speed));
    this.stars = this.stars.filter((star) => star.y <= canvas.height);
  }

  draw(ctx) {
    this.stars.forEach((star) => {
      ctx.shadowBlur = 0;
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    });
  }

  increaseDifficulty() {
    this.starSpeed += STAR_CONFIG.speedIncrease;
  }

  reset() {
    this.stars = [];
    this.starSpeed = STAR_CONFIG.baseSpeed;
  }
}
