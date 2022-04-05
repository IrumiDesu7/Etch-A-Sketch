const buttonContainer = document.createElement('div');
buttonContainer.classList.add('container');
document.body.appendChild(buttonContainer);
const clearBtn = document.createElement('button');
clearBtn.classList.add('clear-button');
clearBtn.textContent = 'Clear';
buttonContainer.appendChild(clearBtn);
let gridDiv, grid;

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
document.body.appendChild(containerDiv);

for (let i = 1; i <= 16; i++) {
  gridDiv = document.createElement('div');
  gridDiv.classList.add('row-container');
  containerDiv.appendChild(gridDiv);
  for (let j = 1; j <= 16; j++) {
    grid = document.createElement('div');
    grid.classList.add('grid');
    gridDiv.appendChild(grid);
  }
}

const gridItems = document.querySelectorAll('.grid');
gridItems.forEach((e) =>
  e.addEventListener('mouseover', function () {
    e.classList.add('color');
  })
);

clearBtn.addEventListener('click', function () {
  gridItems.forEach((e) => e.classList.remove('color'));
});
