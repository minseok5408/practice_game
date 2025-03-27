import { Player } from "./modules/Player.js";
import { StarSystem } from "./modules/Star.js";
import { AudioManager } from "./modules/Audio.js";
import { GameManager } from "./modules/GameManager.js";
import { CANVAS_CONFIG } from "./config.js";
import { UI } from "./ui/UI.js";

// 캔버스와 컨텍스트 객체 가져오기
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 버튼 요소 가져오기
const startButton = document.getElementById("startButton");
const retryButton = document.getElementById("retryButton");

const player = new Player(canvas);
const starSystem = new StarSystem();
const audioManager = new AudioManager();
const gameManager = new GameManager(canvas, ctx);
const ui = new UI(canvas, ctx);

// 캔버스 크기 조절 함수 수정
function resizeCanvas() {
  // config에서 설정한 크기 사용
  canvas.width = CANVAS_CONFIG.width;
  canvas.height = CANVAS_CONFIG.height;
}

// 초기 캔버스 크기 설정
resizeCanvas();

// 게임 시작 버튼 이벤트
startButton.addEventListener("click", () => {
  gameManager.isGameStarted = true;
  startButton.style.display = "none";
  resetGame();
  audioManager.playBGM();
});

// 키 입력 처리
document.addEventListener("keydown", (e) => player.handleKeyDown(e));
document.addEventListener("keyup", (e) => player.handleKeyUp(e));

// 게임 초기화
function resetGame() {
  gameManager.reset();
  player.reset();
  starSystem.reset();
  retryButton.style.display = "none";
  audioManager.playBGM();
  gameLoop();
}

// 게임 루프
function gameLoop() {
  if (!gameManager.isGameStarted) return;

  if (gameManager.isGameOver) {
    ui.drawGameOver(gameManager.score);
    audioManager.stopBGM();
    retryButton.style.display = "block";
    return;
  }

  ui.clear();

  ui.drawScore(gameManager.score);
  player.update();
  player.draw(ctx);
  starSystem.update(canvas);
  starSystem.draw(ctx);

  if (gameManager.checkCollision(player, starSystem.stars)) {
    gameManager.isGameOver = true;
    requestAnimationFrame(gameLoop);
    return;
  }

  if (gameManager.score % 1000 === 0 && gameManager.score !== 0) {
    starSystem.increaseDifficulty();
  }

  gameManager.score += 1;
  requestAnimationFrame(gameLoop);
}

// 리트라이 버튼 이벤트 리스너가 제대로 동작하는지 확인
retryButton.addEventListener("click", () => {
  resetGame();
});

// 별(탄막) 생성 타이머
setInterval(() => starSystem.spawn(canvas), 250);

// 게임 시작
gameLoop();
