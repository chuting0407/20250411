let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#d8e2dc'); // 設定背景顏色

  // 啟動音頻上下文（需要用戶交互）
  userStartAudio();

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 隨機 X 座標
      y: random(height), // 隨機 Y 座標
      size: random(50, 100), // 隨機大小
      color: color(random(255), random(255), random(255)) // 隨機顏色
    });
  }
}

function draw() {
  background('#d8e2dc'); // 每次重繪背景

  // 根據滑鼠 X 座標調整圓的大小
  let sizeFactor = map(mouseX, 0, width, 40, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 100); // 調整大小
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
