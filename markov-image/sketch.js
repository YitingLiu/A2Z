var img1,img2;
var imageSize=50;
var colors={};

// var d=pixelDensity;
function preload(){
	img1=loadImage("img/starry.png");
	// img2=loadImage("img/sunflower.png");
}


function setup() {
	createCanvas(1500,500);
	image(img1,0,0,imageSize,imageSize);
	// image(img2,imageSize,0,imageSize,imageSize);
	getPixels(img1);
	console.log(colors);
}

function getPixels(img){
	img.loadPixels();
	for(var i=0;i<img.width;i++){
		for(var j=0;j<img.height;j++){
			var c=img.get(i,j);
			if(!colors[c]){
				colors[c]=[];
			}
			if(j>=img.heigh){
				colors[c].push(img.get(i+1,0));
			}else{
				colors[c].push(img.get(i,j+1))
			}
		}
	}
}


