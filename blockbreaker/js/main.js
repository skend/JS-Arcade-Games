var px = canvas.width / 2 - PADDLE_WIDTH / 2;
var py = canvas.height - 30;

var paddledx = 0;

var lives = 3;
var gameEnd = false;

var blocks = [];
var numVisibleBlocks = 0;

class Block {
  x;
  y;
  visible = true;
  color;

  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

function init() {
  createBlocks();
  placeBall();
  setInterval(draw, 10);
}

function checkGameEnd() {
  if (numVisibleBlocks == 0) {
    gameEnd = true;
    drawWinText();
  }
  else if (lives <= 0) {
    gameEnd = true;
    drawLoseText();
  }
}

function createBlocks() {
  var blockY = canvas.height - 250;
  for (var i = 1; i <= 5; i++) {
    var color = getRandomColor();
    for (var j = 1; j <= i; j++) {
      var tempX =
        canvas.width / 2 -
        (PADDLE_WIDTH / 2) * i -
        (i - 1) * 5 +
        (j - 1) * (BLOCK_WIDTH + 15); // weird magic numbers pls fix
      var tempY = blockY - (BLOCK_HEIGHT + 10) * (i - 1);
      blocks.push(new Block(tempX, tempY, color));
      numVisibleBlocks++;
    }
  }
}

init();
