var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {
  if (gameEnd) return;

  clearScreen();
  drawBall();
  drawBlocks();
  drawPaddle();
  checkBallConstraints();
  moveBall();
  movePaddle();
  checkPaddleCollision();
  checkBlockCollision();
  drawHearts();
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(bx, by, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#DDDDDD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(px, py, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.fillStyle = "tomato";
  ctx.fill();
  ctx.closePath();
}

function drawHearts() {
  var heartSize = 30;
  var img = document.getElementById("heart");
  for (var i = 0; i < lives; i++) {
    ctx.drawImage(img, 10 + i * (heartSize + 5), 10, heartSize, heartSize);
  }
}

function drawBlocks() {
  blocks.forEach(element => {
    if (element.visible) {
      drawBlock(element);
    }
  });
}

function drawBlock(block) {
  ctx.beginPath();
  ctx.rect(block.x, block.y, BLOCK_WIDTH, BLOCK_HEIGHT);
  ctx.fillStyle = block.color;
  ctx.fill();
  ctx.closePath();
}

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawWinText() {
  drawText("You win!!")
}

function drawLoseText() {
  drawText("You lost!")
}

function drawText(text) {
  ctx.font = "50px JetBrains Mono ExtraBold";
  ctx.textAlign = "center";
  ctx.fillStyle = getRandomColor();
  ctx.fillText(text, canvas.width/2, (canvas.height/3) * 2);
}
