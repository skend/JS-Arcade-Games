var bx, by, balldx, balldy;

function moveBall() {
  bx += balldx;
  by += balldy;
}

function placeBall() {
  bx = px + PADDLE_WIDTH / 2;
  by = py - PADDLE_HEIGHT / 2 + 1;
  balldx = 0;
  balldy = 0;
}

function shootBall() {
  if (gameEnd) return;

  balldx = getRandomInt(-2, 2);
  balldy = -2;

  if (Math.abs(balldx) < 0.09) {
    balldx = 0.1;
  }
}

function increaseBallSpeed() {
  balldy *= 1.1;
}
