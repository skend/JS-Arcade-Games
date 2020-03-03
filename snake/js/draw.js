var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {
  clearScreen();
  moveSnake();
  detectEdge();
  detectEatApple();
  detectSnakeCollision();
  drawBoard();

  if (gameEnd) {
    drawLoseText();
  }
}

function drawBoard() {
  fillSquare(appleX, appleY, "red");
  for (var i = 0; i < snakeSize; i++) {
    fillSquare(snake[i].x, snake[i].y, "white");
  }
}

function drawLoseText() {
  ctx.font = "50px JetBrains Mono ExtraBold";
  ctx.textAlign = "center";
  ctx.fillStyle = "blue";
  ctx.fillText("You lost!", canvas.width / 2, (canvas.height / 3) * 2);
}

function fillSquare(i, j, color) {
  ctx.beginPath();
  ctx.rect(i * PIXEL_SIZE, j * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
