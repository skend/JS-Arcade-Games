var keys = {};

function movePaddle() {
  if (
    gameEnd ||
    (px + PADDLE_WIDTH >= canvas.width && keys[RIGHT_KEY]) ||
    (px <= 0 && keys[LEFT_KEY])
  ) {
    paddledx = 0;
    return;
  }

  if (keys[RIGHT_KEY]) {
    // right
    if (paddledx < 0) {
      paddledx = 0;
    }
    paddledx = PADDLE_TOP_SPEED;
  } else if (keys[LEFT_KEY]) {
    // left
    if (paddledx > 0) {
      paddledx = 0;
    }
    paddledx = -PADDLE_TOP_SPEED;
  }

  checkPaddleConstraints();
  px += paddledx;
  checkIfBallOnPaddle();
}

function checkIfBallOnPaddle() {
  if (balldx == 0 && balldy == 0) {
    if (keys[SPACE_BAR]) {
      shootBall();
    }
    bx = px + PADDLE_WIDTH / 2;
    by = py - PADDLE_HEIGHT / 2 + 1;
  }
}

document.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});
