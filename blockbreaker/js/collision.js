function checkPaddleCollision() {
  if (
    bx >= px &&
    bx <= px + PADDLE_WIDTH &&
    by >= py &&
    by <= py + PADDLE_HEIGHT
  ) {
    if (
      bx <= px + PADDLE_WIDTH / 4 ||
      bx >= px + PADDLE_WIDTH - PADDLE_WIDTH / 4
    ) {
      balldy = -balldy;
      balldx = -balldx;
    } else {
      if (keys[39] || keys[37]) {
        balldx *= 1.15;
      }
      balldy = -balldy;
    }
  }
}

function checkBlockCollision() {
  blocks.forEach(element => {
    if (
      element.visible &&
      bx >= element.x &&
      bx <= element.x + BLOCK_WIDTH &&
      by >= element.y &&
      by <= element.y + BLOCK_HEIGHT
    ) {
      element.visible = false;
      drawBlock(element);
      numVisibleBlocks--;
      balldy = -balldy;
      increaseBallSpeed();
      checkGameEnd();
    }
  });
}

function checkBallConstraints() {
  if (bx <= 0 || bx >= canvas.width) {
    balldx = -balldx;
    if (bx <= 0) bx = 0;
    else x = canvas.width;
  }
  // TODO: ball should fall through ground
  else if (by <= 0) {
    balldy = -balldy;
    by = 0;
  } else if (by >= canvas.height) {
    lives -= 1;
    placeBall();
    checkGameEnd();
  }
}

function checkPaddleConstraints() {
  if (!keys[39] && paddledx > 0) {
    paddledx -= PADDLE_DEACCEL;
    if (Math.abs(paddledx) < PADDLE_DEACCEL) {
      paddledx = 0;
    }
  } else if (!keys[37] && paddledx < 0) {
    paddledx += PADDLE_DEACCEL;
    if (Math.abs(paddledx) < PADDLE_DEACCEL) {
      paddledx = 0;
    }
  }
}