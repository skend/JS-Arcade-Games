var keys = {};

document.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});
