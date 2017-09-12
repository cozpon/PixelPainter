var PixelPainter = (function(h) {
  /*this is for switching colors of swatch squares by generating hex value*/
  function randomColor(){
    var hex = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
      color += hex[Math.round(Math.random() * 15)];
    }//end for
    return color;
  }//end func
  var currentColor = randomColor();

  var canvasDiv = document.createElement("div");
  canvasDiv.style.height = h;
  canvasDiv.style.width = h;
  canvasDiv.id = "canvas"; /*styled in CSS correctly*/

  var a = document.getElementById("pp-canvas");
  a.appendChild(canvasDiv);

  /*display a small square showing the current color*/
  var currentColorDiv = document.createElement("div");
  currentColorDiv.id = "currentColorSquare";
  a.appendChild(currentColorDiv);

  /*use nested for to create a 10x10 grid of smaller squares*/
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
    /*make the currentColor to null*/
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
      palletes[i].style.backgroundColor = randomColor();
    }//end for

  /*change the current color to the bgc of the pallete square clicked*/
  for (var i = 0; i < palletes.length; i++) {
    palletes[i].addEventListener('click', function() {
      currentColor = event.currentTarget.style.backgroundColor;
      currentColorDiv.style.backgroundColor = currentColor;
    });
  }//end for

  
    

})();