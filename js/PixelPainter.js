var PixelPainter = (function(h) {

  var canvasDiv = document.createElement("div");
  canvasDiv.style.height = h;
  canvasDiv.style.width = h;
  canvasDiv.id = "canvas"; /*styled in CSS correctly*/

  var a = document.getElementById("pp-canvas");
  a.appendChild(canvasDiv);

  /*use nested for to create a 10x10 grid of smaller squares*/
  for (var i = 0; i < 100; i++) {
      var ssDiv = document.createElement("div");
      ssDiv.setAttribute('class', "smallSquare"); 
      canvasDiv.appendChild(ssDiv);   
  }

  var squares = document.querySelectorAll(".smallSquare");
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function(){
      this.style.backgroundColor = null;
    });
  }
  

  var swatchDiv = document.createElement("div");
  swatchDiv.id = "color-swatch";

  a.appendChild(swatchDiv);

  var eraseBtnDiv = document.createElement("div");
  eraseBtnDiv.id = "eraseBtn";
  eraseBtnDiv.innerHTML = "Erase";

  a.appendChild(eraseBtnDiv); 

  var clearBtnDiv = document.createElement("div");
  clearBtnDiv.id = "clearBtn";
  clearBtnDiv.innerHTML = "Clear";
  clearBtnDiv.addEventListener("click", function() {
    console.log("clear!"); 
  });

  a.appendChild(clearBtnDiv);

  /*add small squares to the color swatch*/
  /*we need each to be a different color..for loop?*/
  var b = document.getElementById("color-swatch");

  var palleteDiv = document.createElement("div");
  palleteDiv.id = "pallete";
  palleteDiv.addEventListener("click", function() {
    console.log("t");
  });
  b.appendChild(palleteDiv);
    

})();//end IIFE