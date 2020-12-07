var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
colorDisplay.textContent = pickedColor;
var numSquares = 6;

// EASY/HARD BUTTON FUNCTIONALITY.
easybtn.addEventListener("click", function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares= 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i=0; i<squares.length;i++) {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        } else {
            squares[i].style.display =  "none" ;
        }
    }
})

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i=0; i<squares.length;i++) {
      squares[i].style.backgroundColor=colors[i];
        
            squares[i].style.display =  "block" ;
    }
});
// THE RESET BUTTON!
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
    // Generate all new colors
    colors = generateRandomColors(numSquares);
//Choose a random color from array to be displayed on h1
  pickedColor=pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors"
  messageDisplay.textContent="";
  // change color of squares
   for (var i=0;i<squares.length;i++) {
       squares[i].style.backgroundColor=colors[i];
   }
   h1.style.background = "steelblue"; 
})


for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares.
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares.
    squares[i].addEventListener("click", function () {

        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent="Play Again?"
            changeColors();
            h1.style.background = clickedColor;
           
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });

}
// changing squares color to be the right ONE!
function changeColors() {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

// picking up a Random color!
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generating random color function

function generateRandomColors(num) {
    // Make an array
    var arr = []
    // repeat num times 
    for (var i = 0; i < num; i++) {
        // get Random color and oush into arr
        arr.push(randomColor())
    }
    // return arr;
    return arr;
}

function randomColor() {
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}