// Your JS goes here



for(let i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  tile.style.paddingBottom = "11.1%";
  tile.style.width = "11.1%";
  tile.style.backgroundColor = color;
  tile.style.float = "left";
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var col = "rgb(" + r + "," + g + "," + b + ")";

  // if(i % 2 === 0) {
  //   tile.style.backgroundColor = "black";
  // }

  document.body.appendChild(tile);
}
