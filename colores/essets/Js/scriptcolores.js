
const ids = ['blue', 'red', 'green', 'yellow'];
ids.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', function () {
      this.style.backgroundColor = 'black';
    });
  }
});

let currentKeyColor = null;
const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (key === 'a') {
    currentKeyColor = 'pink';
    keyDiv.style.backgroundColor = currentKeyColor;
  } else if (key === 's') {
    currentKeyColor = 'orange';
    keyDiv.style.backgroundColor = currentKeyColor;
  } else if (key === 'd') {
    currentKeyColor = 'skyblue';
    keyDiv.style.backgroundColor = currentKeyColor;
  }

  const genContainer = document.getElementById('generatedContainer');

  if (key === 'q') {
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.style.background = 'purple';
    newDiv.textContent = 'morado';
    genContainer.appendChild(newDiv);
  } else if (key === 'w') {
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.style.background = 'gray';
    newDiv.textContent = 'gris';
    genContainer.appendChild(newDiv);
  } else if (key === 'e') {
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.style.background = 'brown';
    newDiv.textContent = 'café';
    genContainer.appendChild(newDiv);
  }
});