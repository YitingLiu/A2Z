var img;
var imageSize = 100;
var colors = {};

// var d=pixelDensity;
function preload() {
  img = loadImage("img/starry.png");
}


function setup() {
  createCanvas(imageSize, imageSize*2);
  image(img, 0, 0, imageSize, imageSize);
  getPixels();
  // console.log(colors);
  startColor=get(floor(random(imageSize)),floor(random(imageSize)));
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

function setPixels(next){
  console.log("startSetting");
  for (var i = 0; i < imageSize; i++) {
    for (var j = imageSize; j < imageSize+imageSize; j++) {
      if(i==0 && j==0){
        set(i,j,next);
      } else {
        currentColor=get(i,j-imageSize);
        next=random(colors[currentColor]);
        console.log(next);
        set(i,j,next);
      }
    }
  }
  updatePixels();
  console.log("completed!")
}