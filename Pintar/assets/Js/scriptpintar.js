


const ele = document.getElementById("ele1");

function pintar(elemento, color = 'green') {
  elemento.style.backgroundColor = color;
}

ele.addEventListener("click", function (event) {

  pintar(event.currentTarget, 'yellow');
});