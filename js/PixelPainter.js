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
      ssDiv.id = "smallSquare"; 
      canvasDiv.appendChild(ssDiv);
    
  }//end 2x2 for

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

  a.appendChild(clearBtnDiv);


  //we divide the HxW by X amt of squares then create a bunch of smaller squares within the canvas

})();//end IIFE