var fruits;
var animals;
var score;
// var trueButton;
// var falseButton;
function preload(){
	fruits=loadJSON('json/fruits.json');
	animals=loadJSON('json/animals.json');
}

function setup(){
	noCanvas();
	console.log(fruits);
	console.log(animals);
	getAWord();
	score=0;

}

// function draw(){
// 	var fruit=random(fruits.fruits)
// 	var animal=random(animals.animals)
// 	var answer=random();
// 	var word;
// 	if(answer<0.5){
// 		word=fruit;
// 	}else{
// 		word=animal;
// 	}
// 	var p=createP(word);
// 	console.log(p);
// }

function getAWord(){
	var fruit=random(fruits.fruits)
	var animal=random(animals.animals)
	var word;
	if(random()<0.5){
		word=fruit;
		answer=true;
	}else{
		word=animal;
		answer=false;
	}
	var p=createP(word);
	p.parent('w3word');
	console.log(p);
	var trueButton=createButton("True");
	var falseButton=createButton("False");
	trueButton.id('w3trueButton');
	falseButton.id('w3falseButton');
	trueButton.mousePressed(isTrue);
	falseButton.mousePressed(isFalse);
}

function isTrue(){
	if(answer==true){
		score+=1;
	} else {
		alert('Game Over!'+'Score:'+score);
		score=0;
	}
			removeElements();

			getAWord();

}

function isFalse(){
	if(answer==false){
		score+=1;
	} else {
		alert('Game Over!'+'Score:'+score);
		score=0;
	}
			removeElements();

			getAWord();

}






