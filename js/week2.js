var hasContent=false;

// Here is where we are working with a regex
function process(txt) {
  // Using match() from String is the simplest way to do this
  // Regex that matches double words, note use of global flag
  var regexH = /\bh+[^.!?]*[.!?]/g;         
  var regexA = /\ba+[^.!?]*[.!?]/g;         
  var regexP = /\bp+[^.!?]*[.!?]/g;         
  var regexY = /\by+[^.!?]*[.!?]/g;         
  var regexB = /\bb+[^.!?]*[.!?]/g;         
  var regexI = /\bi+[^.!?]*[.!?]/g;         
  var regexR = /\br+[^.!?]*[.!?]/g;         
  var regexT = /\bt+[^.!?]*[.!?]/g;         
  var regexD = /\bd+[^.!?]*[.!?]/g;         
  // var resultH = [];
  // var resultA = [];
  // var resultP = [];
  // var resultY = [];
  // var resultB = [];
  // var resultI = [];
  // var resultR = txt.match(regexR);
  // var resultT = txt.match(regexT);
  // var resultD = txt.match(regexD); 

  var resultH = txt.match(regexH);
  var resultA = txt.match(regexA);
  var resultP = txt.match(regexP);
  var resultY = txt.match(regexY);
  var resultB = txt.match(regexB);
  var resultI = txt.match(regexI);
  var resultR = txt.match(regexR);
  var resultT = txt.match(regexT);
  var resultD = txt.match(regexD);   

  if(resultH == null){
    var output="Hope that this day is as special and wonderful as you are,";
  } else {
    var output = resultH[floor(random(resultH.length))];
  }
  var Cap=output[0];
  var lowercase=output.slice(1,output.length);
  var part=createElement('p',Cap);
  part.id("line1");
  var par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line1");


  if(resultA == null){
    output="Always remember to keep your head up and keep reaching for that star.";
  } else {
    output = resultA[floor(random(resultA.length))];
  }
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line2");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line2");

  if(resultP == null){
    output="Put all of your worries and fears aside as you celebrate you,";
  } else {
  output = resultP[floor(random(resultP.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line3");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line3");

  if(resultP == null){
    output="Pass your time away doing things that you always wanted to do.";
  } else {
  output = resultP[floor(random(resultP.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line4");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line4");

  if(resultY == null){
    output="You are just a child but someone very special that deserves it all.";
  } else {
  output = resultY[floor(random(resultY.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line5");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line5");

  if(resultB == null){
    output="Believe in yourself as you grow each day,";
  } else {
  output = resultB[floor(random(resultB.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line6");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line6");

  if(resultI == null){
    output="In your heart always know that you are loved.";
  } else {
  output = resultI[floor(random(resultI.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line7");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line7");

  if(resultR == null){
    output="Remember to reach out and give back to those in your life.";
  } else {
  output = resultR[floor(random(resultR.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line8");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line8");

  if(resultT == null){
    output="Try to do your best and always have an open heart and mind.";
  } else {
  output = resultT[floor(random(resultT.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line9");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line9");

  if(resultH == null){
    output="Happiness is yours and I hope that you feel it deep inside.";
  } else {
  output = resultH[floor(random(resultH.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line10");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line10");

  if(resultD == null){
    output="Don't ever let anyone get the best of you.";
  } else {
  output = resultD[floor(random(resultD.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line11");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line11");

  if(resultA == null){
    output="Always do the right thing and make your family proud,";
  } else {
  output = resultA[floor(random(resultA.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line12");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line12");

  if(resultY == null){
    output="You are ten today and I wish you the happiest birthday of all!";
  } else {
  output = resultY[floor(random(resultY.length))];
}
  Cap=output[0];
  lowercase=output.slice(1,output.length);
  part=createElement('p',Cap);
  part.id("line13");
  par=createElement('span',lowercase);
  par.class("outputtext");
  par.parent("line13");

  hasContent=true;
}


/***************************************************/
/* Everything below just handles the text input ****/
/***************************************************/


// Many DOM elements
var input, button, sample, clearButton;

var inputText = '';

function setup() {

  noCanvas();

  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');
  // What to do when button pressed
  button.mousePressed(handleInput);

  // // This buton clears the new paragraph elements
  // // added
  // clearButton = select('#clear');
  // clearButton.mousePressed(clearText);
}

// Handle the text input field
function handleInput() {
  console.log("pressed!");

  if(hasContent==true){
    for(var i=1;i<14;i++){
      var s="#line"+i;
      var p=select(s);
      p.remove();
    }
  }

  process(input.value());
}

// Clear all the divs with remove()
// function clearText() {
//   input.html('');
//   intputText = '';
//   for (var i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].remove();
//   }
//   paragraphs = [];
// }
