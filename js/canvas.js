var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});


var colors =['#C2FCD9','#A0E4B0','#F8FBA2','#FA7F7F']

function init() {

}

init();

//http://www.html5canvastutorials.com/advanced/html5-canvas-colorful-wave-effect/
