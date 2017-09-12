var PixelPainter = (function(h) {

  var canvasDiv = document.createElement("div");
  canvasDiv.style.height = h;
  canvasDiv.style.width = h;
  canvasDiv.id = "test";

  var a = document.getElementById("pp-canvas");
  a.appendChild(canvasDiv);

  //we divide the HxW by X amt of squares then create a bunch of smaller squares within the canvas



})();//end IIFE