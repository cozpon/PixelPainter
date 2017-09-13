var PixelPainter = (function(h) {
  
  var currentColor = colorGenerator.randomColor();

  /*create and append the canvas/swatch/btns to the parent pp-canvas DIV*/
  var a = document.getElementById("pp-canvas");

  var canvasDiv = document.createElement("div");
  canvasDiv.id = "canvas";
  a.appendChild(canvasDiv);

  /*display the current color in a DIV at the top*/
  var currentColorDisplayDiv = document.createElement("div");
  var currentColorDiv = document.createElement("div");
  currentColorDisplayDiv.id = "currentColorDisplay";
  currentColorDisplayDiv.innerHTML = "Color"
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
  /*drag functionality is here through multiple eventHandlers*/
  var squares = document.querySelectorAll(".smallSquare");
  var activeDraw = false;
  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener('mousedown', function() {
      activeDraw = true;
    });

    squares[i].addEventListener('mousemove', function(){
      if(activeDraw) {
        this.style.backgroundColor = currentColor;
      }
    });

    squares[i].addEventListener('mouseup', function(){
      activeDraw = false;
    });

    squares[i].addEventListener('click', function() {
      this.style.backgroundColor = currentColor;
    });
  }//end for

  document.getElementById("canvas").addEventListener("mouseleave", function(event) {
      console.log("outside");
      activeDraw = false;
  });
  
  var swatchDiv = document.createElement("div");
  swatchDiv.id = "color-swatch";
  a.appendChild(swatchDiv);

  /*creating both erase and clear buttons*/
  var eraseBtnDiv = document.createElement("div");
  eraseBtnDiv.id = "eraseBtn";
  eraseBtnDiv.innerHTML = "Erase";
  eraseBtnDiv.addEventListener('click', function() {
    currentColorDiv.style.backgroundColor = null;
    currentColor = null;
  });

  var clearBtnDiv = document.createElement("div");
  clearBtnDiv.id = "clearBtn";
  clearBtnDiv.innerHTML = "Clear";
  clearBtnDiv.addEventListener("click", function() {
    for (var i = 0; i < squares.length; i++) {
      if (squares[i].style.backgroundColor !== 'pink') {
        squares[i].style.backgroundColor = 'pink';
      }
    }
  });

  a.appendChild(eraseBtnDiv); 
  a.appendChild(clearBtnDiv);

  /*create and append pallete squares to the color swatch*/
  var b = document.getElementById("color-swatch");

  for (var i = 0; i < 90; i++) {
      var palleteDiv = document.createElement("div");
      palleteDiv.setAttribute('class', "pallete");
      b.appendChild(palleteDiv);
    }//end for

  /*upon page load, all 90 pallete squares start as random colors*/
  /*eventHandler will change currentColor to the bgc of the pallete clicked*/
  var palletes = document.querySelectorAll(".pallete");
  for (var i = 0; i < palletes.length; i++) {
        var hexValue = colorGenerator.randomHex();
        var lightest = 0;
        var darkest = hexValue;


        palletes[i].style.backgroundColor = "#" + hexValue;
        /*trying to work on a way to sort these colors into a gradient*/


        palletes[i].addEventListener('click', function() {
          currentColor = event.currentTarget.style.backgroundColor;
          currentColorDiv.style.backgroundColor = currentColor;
      });
    }//end for

})();