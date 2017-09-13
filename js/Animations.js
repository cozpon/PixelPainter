var animateCanvas = (function() {

  var x = document.getElementById("canvas");

  function clear() {
    x.style.backgroundColor = 'pink';
  }

  return animateCanvas = {
    clear: clear
  }

})();



