function getRandomColor() {
  var colors = [
    "#d069ff",
    "#ff8de3",
    "#87a7ff",
    "#a4ff8f",
    "#fff168",
    "#ff5a5a",
    "#46ffdb",
    "#00b5e4",
    "#957afc",
    "#a43981"
  ];
  return colors[getRandomInt(0, 4)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
