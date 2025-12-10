

const ids = ["blue", "red", "green", "yellow"];

ids.forEach(id => {
  const div = document.getElementById(id);

  div.addEventListener("click", function () {
    div.style.backgroundColor = "black";
  });
});



let currentColor = "";


const keyDiv = document.getElementById("key");


const generatedContainer = document.getElementById("generatedContainer");



document.addEventListener("keydown", function (event) {
  const key = event.key;

  
  if (key === "a") {
    currentColor = "pink";
    keyDiv.style.backgroundColor = currentColor;

  } else if (key === "s") {
    currentColor = "orange";
    keyDiv.style.backgroundColor = currentColor;

  } else if (key === "d") {
    currentColor = "skyblue";
    keyDiv.style.backgroundColor = currentColor;
  }


  if (key === "q") {
    createColorBox("purple");

  } else if (key === "w") {
    createColorBox("gray");

  } else if (key === "e") {
    createColorBox("brown");
  }
});


function createColorBox(color) {
  const box = document.createElement("div");
  box.style.width = "200px";
  box.style.height = "200px";
  box.style.backgroundColor = color;
  box.style.border = "1px solid black";
  box.style.margin = "10px";

  generatedContainer.appendChild(box);
}