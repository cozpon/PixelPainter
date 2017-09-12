var PixelPainter = (function(h) {
  
  /*this variable begins as a random color*/
  var currentColor = colorGenerator.randomColor();

  var canvasDiv = document.createElement("div");
  canvasDiv.id = "canvas";
  var a = document.getElementById("pp-canvas");
  a.appendChild(canvasDiv);

  /*display in a DIV the current color*/
  var currentColorDisplayDiv = document.createElement("div");
  var currentColorDiv = document.createElement("div");
  currentColorDisplayDiv.id = "currentColorDisplay";
  currentColorDisplayDiv.innerHTML = "Current Color"
  currentColorDiv.id = "currentColorSquare";
  currentColorDiv.style.backgroundColor = currentColor;
  a.appendChild(currentColorDisplayDiv);
  currentColorDisplayDiv.appendChild(currentColorDiv);

  /*use nested for to create a 10x10 grid of smaller squares*/
  /*THIS NEEDS TO BE ENCAPSULATED and allow for user input!*/
  for (var i = 0; i < 100; i++) {
      var ssDiv = document.createElement("div");
      ssDiv.setAttribute('class', "smallSquare"); 
      canvasDiv.appendChild(ssDiv);   
  }

  /*change the bgc of a canvas square when clicked to currentColor*/
  var squares = document.querySelectorAll(".smallSquare");
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(){
      this.style.backgroundColor = currentColor;
    });
  }
  
  var swatchDiv = document.createElement("div");
  swatchDiv.id = "color-swatch";

  a.appendChild(swatchDiv);

  var eraseBtnDiv = document.createElement("div");
  eraseBtnDiv.id = "eraseBtn";
  eraseBtnDiv.innerHTML = "Erase";
  eraseBtnDiv.addEventListener('click', function() {
    currentColorDiv.style.backgroundColor = null;
    currentColor = null;
  });

  a.appendChild(eraseBtnDiv); 

  var clearBtnDiv = document.createElement("div");
  clearBtnDiv.id = "clearBtn";
  clearBtnDiv.innerHTML = "Clear";
  clearBtnDiv.addEventListener("click", function() {
    /*we want to erase all the canvas squares back to original bgc*/
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = null; 
    }
  });

  a.appendChild(clearBtnDiv);

  /*add small squares to the color swatch*/
  /*we need each to be a different color..for loop?*/
  var b = document.getElementById("color-swatch");

  for (var i = 0; i < 90; i++) {
      var palleteDiv = document.createElement("div");
      palleteDiv.setAttribute('class', "pallete");
      b.appendChild(palleteDiv);
    }//end for

  /*upon page load, all 90 squars are random colors*/
  var palletes = document.querySelectorAll(".pallete");
  for (var i = 0; i < palletes.length; i++) {
      palletes[i].style.backgroundColor = colorGenerator.randomColor();
    }//end for

  /*change the current color to the bgc of the pallete square clicked*/
  for (var i = 0; i < palletes.length; i++) {
    palletes[i].addEventListener('click', function() {
      currentColor = event.currentTarget.style.backgroundColor;
      currentColorDiv.style.backgroundColor = currentColor;
    });
  }//end for

  
    

})();