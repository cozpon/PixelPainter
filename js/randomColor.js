function randomColor(){
    var hex = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
      color += hex[Math.round(Math.random() * 15)];
    }//end for
    return color;
}

