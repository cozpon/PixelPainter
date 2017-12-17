var PixelPainter = (function(h) {
  var currentColor = colorGenerator.randomColor();
  var activeDraw = false;
  var savedPictures = [];

  var mainDiv = document.getElementById("pp-canvas");
  var canvasDiv = document.createElement("div");
  var swatchDiv = document.createElement("div");
  var currentColorDisplayDiv = document.createElement("div");
  var currentColorDiv = document.createElement("div");
  var eraseBtnDiv = document.createElement("div");
  var clearBtnDiv = document.createElement("div");
  var saveBtnDiv = document.createElement("div");
  var loadBtnDiv = document.createElement("div");



  // creates main canvas area
  canvasDiv.id = "canvas";
  mainDiv.appendChild(canvasDiv);

  // Creates Swatch in HTML
  swatchDiv.id = "color-swatch";
  mainDiv.appendChild(swatchDiv);

  /*display the current color in a DIV at the top*/
  currentColorDisplayDiv.innerHTML = "Color"; // puts the word Color
  currentColorDisplayDiv.id = "currentColorDisplay"; // puts the current color Box
  currentColorDiv.id = "currentColorSquare"; // displays Current Color Square
  currentColorDiv.style.backgroundColor = currentColor; // loads color square with color
  currentColorDisplayDiv.style.borderColor = currentColor;
  mainDiv.appendChild(currentColorDisplayDiv); // adds to HTML
  currentColorDisplayDiv.appendChild(currentColorDiv); // adds to HTML inside color box



  for (var i = 0; i < 400; i++) {
      var ssDiv = document.createElement("div" + [i]);
      ssDiv.setAttribute('class', "smallSquare");
      canvasDiv.appendChild(ssDiv);
  }

  /*change the bgc of a canvas square when clicked to currentColor*/
  /*drag functionality is here through multiple eventHandlers*/
  var squares = document.querySelectorAll(".smallSquare");
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
      activeDraw = false;
  });

  saveBtnDiv.id = "saveBtn";
  saveBtnDiv.innerHTML = "Save";
  saveBtnDiv.addEventListener('click', function(){
    savedDrawing = [];
    for (var i = 0; i < squares.length; i++){
      savedDrawing.push(squares[i].style.backgroundColor);
    }
    console.log("SAVE");
  });


  loadBtnDiv.id = "loadBtn";
  loadBtnDiv.innerHTML = "Load";
  loadBtnDiv.addEventListener('click', function(){
    for (var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = savedDrawing[i];
    }
    console.log("load!");
  });

  eraseBtnDiv.id = "eraseBtn";
  eraseBtnDiv.innerHTML = "Erase";
  eraseBtnDiv.addEventListener('click', function() {
    currentColorDiv.style.backgroundColor = null;
    currentColorDisplayDiv.style.borderColor = null;
    currentColor = null;
  });


  clearBtnDiv.id = "clearBtn";
  clearBtnDiv.innerHTML = "Clear";
  clearBtnDiv.addEventListener("click", function() {
    for (var i = 0; i < squares.length; i++) {
      if (squares[i].style.backgroundColor !== null) {
        squares[i].style.backgroundColor = null;
      }
    }
  });

  mainDiv.appendChild(eraseBtnDiv);
  mainDiv.appendChild(clearBtnDiv);
  mainDiv.appendChild(loadBtnDiv);
  mainDiv.appendChild(saveBtnDiv);


  /*create and append pallete squares to the color swatch*/
  var colorSwatch = document.getElementById("color-swatch");

  for (var i = 0; i < 90; i++) {
      var palleteDiv = document.createElement("div");
      palleteDiv.setAttribute('class', "pallete");
      colorSwatch.appendChild(palleteDiv);
    }//end for


  var palletes = document.querySelectorAll(".pallete");
  for (var i = 0; i < palletes.length; i++) {
        var hexValue = colorGenerator.randomHex();
        var lightest = 0;
        var darkest = hexValue;

        palletes[i].style.backgroundColor = "#" + hexValue;
        palletes[i].addEventListener('click', function(event) {
          currentColor = event.currentTarget.style.backgroundColor;
          currentColorDiv.style.backgroundColor = currentColor;
          currentColorDisplayDiv.style.borderColor = currentColor;

      });
    }

})();