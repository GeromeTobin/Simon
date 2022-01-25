// ===========================================================================
// buttons====================================================================
// ===========================================================================
var loss = 0;
var patternNum = 1;
var run = 0;
var globalInput = [];
var patternLog = [];
var stopGate = 0;
var clickyArray = [];

function start() {
  clickyArray = [];
  console.log("start.patternNum: " + patternNum);
  pattern(patternNum);
  patternNum++;


}

function pattern(times) {


  patternLog.push(Math.floor(Math.random() * 4 + 1));
  console.log("pattern/patternLog: " + patternLog);


  patternRun(patternLog);
}



function patternRun(inputs) {
  console.log("pattern/patternLog2: " + patternLog);
  console.log("patternRun/inputs: " + inputs);

  for (var i = 0; i < inputs.length; i++) {
    var workPlease = inputs[i];
    switchCasePattern(workPlease, i);
  }

}



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


function switchCasePattern(rngInput, time) {

  var delay = time * 1000 + 1000;


  switch (rngInput) {
    case 1:
      setTimeout(function() {
        $(".btn1").addClass("pressed");
        var audio = new Audio("sounds/green.mp3");
        audio.play();
      }, delay - 500);
      setTimeout(function() {
        $(".btn1").removeClass("pressed");
      }, delay);

      break;

    case 2:
      setTimeout(function() {
        $(".btn2").addClass("pressed");
        var audio = new Audio("sounds/red.mp3");
        audio.play();
      }, delay - 500);
      setTimeout(function() {
        $(".btn2").removeClass("pressed");
      }, delay);

      break;

    case 3:
      setTimeout(function() {
        $(".btn3").addClass("pressed");
        var audio = new Audio("sounds/yellow.mp3");
        audio.play();
      }, delay - 500);
      setTimeout(function() {
        $(".btn3").removeClass("pressed");
      }, delay);

      break;
    case 4:
      setTimeout(function() {
        $(".btn4").addClass("pressed");
        var audio = new Audio("sounds/blue.mp3");
        audio.play();
      }, delay - 500);
      setTimeout(function() {
        $(".btn4").removeClass("pressed");

      }, delay);


      break;
    default:
      console.log("patternRun/switchCase 0");

  }

}


// ===========================================================================
// clicky ====================================================================
// ===========================================================================


function btn1Click() {

  clickyArray.push("1");
arrayCheck(1);
    $(".btn1").addClass("pressed");
    var audio = new Audio("sounds/green.mp3");
    audio.play();

  setTimeout(function() {
    $(".btn1").removeClass("pressed");

  }, 500);



}




function btn2Click() {

  clickyArray.push("2");
arrayCheck(2);
    $(".btn2").addClass("pressed");
    var audio = new Audio("sounds/red.mp3");
    audio.play();

  setTimeout(function() {
    $(".btn2").removeClass("pressed");

  }, 500);



}

function btn3Click() {

    clickyArray.push("3");
arrayCheck(3);
      $(".btn3").addClass("pressed");
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();

    setTimeout(function() {
      $(".btn3").removeClass("pressed");

    }, 500);





}

function btn4Click() {

    clickyArray.push("4");
arrayCheck(4);
      $(".btn4").addClass("pressed");
      var audio = new Audio("sounds/blue.mp3");
      audio.play();

    setTimeout(function() {
      $(".btn4").removeClass("pressed");
    }, 500);


}




function arrayCheck(clickNumber) {

  console.log("clickyarray= " + clickyArray);
  console.log("patternlog= " + patternLog);
  console.log("clickyArray length= " + clickyArray.length + " patternNum = " + patternNum);

var x = clickyArray.length - 1;
var loss = patternNum - 1;

if (patternLog[x] != clickNumber) {
    console.log("loss//////////////////////////////////////");
  alert("you lose! your score was " + loss);
} else if (clickyArray.length == patternNum - 1) {
  setTimeout(function() {
  start();

  }, 500);

}



}
