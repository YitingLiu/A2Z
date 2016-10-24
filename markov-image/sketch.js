var img;
var imageSize = 100;
var colors = {};
var offset = 30+imageSize;

// var d=pixelDensity;
function preload() {
  img = loadImage("img/sunflower.png");
}


function setup() {
  createCanvas(imageSize, imageSize * 2 + offset);
  image(img, 0, 0, imageSize, imageSize);
  getPixels();
  // console.log(colors);

  var startX = floor(random(imageSize));
  var startY = floor(random(imageSize));
  console.log(startX + " " + startY);
  startColor = get(startX, startY);
  console.log(startColor);
  setPixels(startColor);
}

function getPixels() {
  for (var i = 0; i < imageSize; i++) {
    for (var j = 0; j < imageSize - 1; j++) {
      var c = get(i, j);
      // if (!colors[c]) {
      //   colors[c] = 1;
      // } else{
      //   colors[c] += 1;
      //   console.log(c+":"+colors[c]);
      // }

      if (!colors[c]) {
        colors[c] = [];
      }
      colors[c].push(get(i, j + 1));
    }
  }
}

function setPixels(startColor) {
  // console.log("startSetting");

  var currentColor = startColor;


  for (var i = 0; i < imageSize; i++) {
    for (var j = 0; j < imageSize; j++) {
      if (i == 0 && j == 0) {
        set(i, j + offset, currentColor);
      } else {
        var possibilities = colors[currentColor];
        if (!possibilities) {
          console.log("random");
          //get a new color:
          var x = floor(random(imageSize));
          var y = floor(random(imageSize));
          var next = get(x, y);
        } else {
          var next = random(possibilities);
        }
        set(i, j + offset, next);
        currentColor = next;
      }
    }
  }
  updatePixels();
  console.log("completed!")
}