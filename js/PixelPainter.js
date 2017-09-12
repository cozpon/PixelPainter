var PixelPainter = (function(h) {
  /*this is for switching colors of swatch squares by generating hex value*/
  var color = "red";
  function generate(){
    var hex = "0123456789ABCDEF".split("");
    var col = "#";
    for (var i = 0; i < 6; i++ ) {
      col += hex[Math.round(Math.random() * 15)];
    }//end for
    return col;
  }//end func

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

  /*background color for canvas square functionality*/
  var squares = document.querySelectorAll(".smallSquare");
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(){
      this.style.backgroundColor = "red";
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

  for (var i = 0; i < 90; i++) {
      var palleteDiv = document.createElement("div");
      palleteDiv.setAttribute('class', "pallete");
      b.appendChild(palleteDiv);
    }//end for

  var palletes = document.querySelectorAll(".pallete");
  for (var i = 0; i < palletes.length; i++) {
    palletes[i].addEventListener('click', function() {
      this.style.backgroundColor = generate();
    }); 
  }//end for
  
    

})();//end IIFE