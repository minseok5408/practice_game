export class UI {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawScore(score) {
    this.ctx.fillStyle = "white";
    this.ctx.font = "18px Arial";
    this.ctx.textAlign = "left";
    this.ctx.fillText(`Score: ${score}`, 10, 20);
  }

  drawGameOver(score) {
    // 배경 오버레이
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 게임 오버 텍스트
    this.ctx.fillStyle = "white";
    this.ctx.font = "36px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "Game Over",
      this.canvas.width / 2,
      this.canvas.height / 2 - 20
    );

    // 점수 표시
    this.ctx.fillText(
      `Score: ${score}`,
      this.canvas.width / 2,
      this.canvas.height / 2 + 20
    );

    // 점수 평가 텍스트
    const scoreText = this.getScoreText(score);
    if (scoreText) {
      this.ctx.fillText(
        scoreText,
        this.canvas.width / 2,
        this.canvas.height / 2 - 100
      );
    }
  }

  getScoreText(score) {
    if (score > 100000) return "CEX!!!";
    if (score > 50000) return "Amazing!!";
    if (score > 10000) return "Good!";
    if (score > 5000) return "Not Bad";
    return "허접ㅋ";
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
