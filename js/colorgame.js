var numberOfSquare = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numberOfSquare = 6;

colorDisplay.textContent = pickedColor;

init();

function init() {
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			/*ternary operator... make if shorter**/

			/*this.textContent === "Easy" ? numSquares = 3: numSquares = 6**/

			if (this.textContent === "Easy") {
				numberOfSquare = 3;
			} else {
				numberOfSquare = 6;
			}

			reset();

		});
	}


	for (var i = 0; i < squares.length; i++) {
	
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	reset();
}

function reset() {
	colors = generateRandomColors(numberOfSquare);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	else {
		squares[i].style.display = "none";
	}
}

	h1.style.backgroundColor = "steelblue";
}

/*
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquare = 3;
	colors = generateRandomColors(numberOfSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquare = 6;
	colors = generateRandomColors(numberOfSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = "block";
		
	}
});
*/

resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color) {
	//loop through all squares

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor() {
	var random = Math.floor(Math.random()*colors.length);

	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = [];

	//repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	//"rgb(r, g, b)"

	return "rgb("+ r + ", "+ g + ", "+ b + ")";
}