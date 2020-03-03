var snakeSize = 3;
var snake = [];
var snakeDir; // 0 = up, 1 = down, 2 = left, 3 = right

class Node {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function growSnake() {
  const tail = snake[snake.length - 1];
  switch (snakeDir) {
    case 0:
      // add to bottom
      snake.push(new Node(tail.x, tail.y + 1));
      break;
    case 1:
      snake.push(new Node(tail.x, tail.y - 1));
      break;
    case 2:
      snake.push(new Node(tail.x - 1, tail.y));
      break;
    case 3:
      snake.push(new Node(tail.x + 1, tail.y));
      break;
  }
}

function moveSnake() {
  if (gameEnd) return;
  if (snakeDir == 0 || snakeDir == 1) {
    if (keys[39]) {
      // turn right
      snake.unshift(new Node(snake[0].x + 1, snake[0].y));
      snakeDir = 3;
    } else if (keys[37]) {
      // turn left
      snake.unshift(new Node(snake[0].x - 1, snake[0].y));
      snakeDir = 2;
    } else {
      if (snakeDir == 0) {
        snake.unshift(new Node(snake[0].x, snake[0].y - 1));
      } else {
        snake.unshift(new Node(snake[0].x, snake[0].y + 1));
      }
    }
  } else if (snakeDir == 2 || snakeDir == 3) {
    if (keys[38]) {
      // turn up
      snake.unshift(new Node(snake[0].x, snake[0].y - 1));
      snakeDir = 0;
    } else if (keys[40]) {
      // turn down
      snake.unshift(new Node(snake[0].x, snake[0].y + 1));
      snakeDir = 1;
    } else {
      if (snakeDir == 2) {
        snake.unshift(new Node(snake[0].x - 1, snake[0].y));
      } else {
        snake.unshift(new Node(snake[0].x + 1, snake[0].y));
      }
    }
  }
  snake.pop();
}

function placeSnake() {
  var snakeHeadX = getRandomInt(snakeSize, BOARD_SIZE - snakeSize);
  var snakeHeadY = getRandomInt(snakeSize, BOARD_SIZE - snakeSize);
  snakeDir = getRandomInt(0, 3);
  snakeHeadPos = [snakeHeadX][snakeHeadY];
  switch (snakeDir) {
    case 0: // down
      for (var i = 0; i < snakeSize; i++) {
        snake.push(new Node(snakeHeadX, snakeHeadY + i));
      }
      break;
    case 1: // up
      for (var i = 0; i < snakeSize; i++) {
        snake.push(new Node(snakeHeadX, snakeHeadY - i));
      }
      break;
    case 2: // left
      for (var i = 0; i < snakeSize; i++) {
        snake.push(new Node(snakeHeadX + i, snakeHeadY));
      }
      break;
    case 3: // right
      for (var i = 0; i < snakeSize; i++) {
        snake.push(new Node(snakeHeadX - i, snakeHeadY));
      }
      break;
  }
}

function detectSnakeCollision() {
  if (
    snake.slice(1).find(function(element) {
      return snake[0].x == element.x && snake[0].y == element.y;
    })
  ) {
    gameEnd = true;
  }
}