var lent = document.querySelectorAll(".drum").length;

for( var i = 0; i<lent ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var button = this.innerHTML;
makesound(button);
buttonanimation(button);

}
);
}
document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonanimation(event.key);
});


function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "a":
      var om1 = new Audio("sounds/tom-1.mp3");
      om1.play();
      break;
    case "s":
      var to1 = new Audio("sounds/kick-bass.mp3");
      to1.play();
      break;
    case "d":
      var m1 = new Audio("sounds/snare.mp3");
      m1.play();
      break;
    case "j":
      var tom = new Audio("sounds/tom-4.mp3");
      tom.play();
      break;
    case "k":
      var n1 = new Audio("sounds/tom-3.mp3");
      n1.play();
      break;
    case "l":
      var ton1 = new Audio("sounds/tom-2.mp3");
      ton1.play();
      break;
    default:console.log(key);

  }

}
function buttonanimation(currentkey){
  var pres = document.querySelector("."+currentkey);
  pres.classList.add("pressed");
  setTimeout(function(){
    pres.classList.remove("pressed");
  },100);

}
