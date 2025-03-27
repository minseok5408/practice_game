// 캔버스 설정
export const CANVAS_CONFIG = {
  width: 450,
  height: 800,
};

// 플레이어 설정
export const PLAYER_CONFIG = {
  width: 10,
  height: 20,
  speed: 7,
  color: "cyan",
  initialY: 40,
};

// 별(탄막) 설정
export const STAR_CONFIG = {
  baseSpeed: 2,
  speedIncrease: 0.87,
  types: [
    { color: "#ff073a", radius: 10, speedMultiplier: 1 },
    { color: "#cfff04", radius: 15, speedMultiplier: 0.8 },
    { color: "#bc13fe", radius: 5, speedMultiplier: 1.5 },
  ],
};

// 점수 설정
export const SCORE_CONFIG = {
  difficultyIncrease: 1000,
  scoreTexts: {
    excellent: { threshold: 100000, text: "CEX!!!" },
    amazing: { threshold: 50000, text: "Amazing!!" },
    good: { threshold: 10000, text: "Good!" },
    notBad: { threshold: 5000, text: "Not Bad" },
    poor: { threshold: 0, text: "허접ㅋ" },
  },
};
