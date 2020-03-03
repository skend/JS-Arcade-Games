var appleX;
var appleY;
var gameEnd = false;

const PIXEL_SIZE = 10;
const BOARD_SIZE = 30;

function detectEatApple() {
  if (snake[0].x == appleX && snake[0].y == appleY) {
    snakeSize += 1;
    growSnake();
    placeApple();
  }
}

function detectEdge() {
  for (var i = 0; i < snakeSize; i++) {
    if (snake[i].x < 0) {
      snake[i].x = BOARD_SIZE - 1;
    } else if (snake[i].x >= BOARD_SIZE) {
      snake[i].x = 0;
    } else if (snake[i].y < 0) {
      snake[i].y = BOARD_SIZE - 1;
    } else if (snake[i].y >= BOARD_SIZE) {
      snake[i].y = 0;
    }
  }
}

function placeApple() {
  appleX = getRandomInt(0, BOARD_SIZE - 1);
  appleY = getRandomInt(0, BOARD_SIZE - 1);
}
