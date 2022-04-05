const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
document.body.appendChild(buttonContainer);
const clearBtn = document.createElement('button');
clearBtn.classList.add('clear-button');
clearBtn.textContent = 'Clear';
buttonContainer.appendChild(clearBtn);

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
document.body.appendChild(containerDiv);
let gridDiv, grid;
let gridSize = prompt('Enter grid size a by a : ');
if (gridSize > 100) {
  console.log('no');
}

for (let i = 1; i <= gridSize; i++) {
  gridDiv = document.createElement('div');
  gridDiv.classList.add('row-container');
  containerDiv.appendChild(gridDiv);
  for (let j = 1; j <= gridSize; j++) {
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
  // gridSize = prompt('Enter grid size a by a : ');
});
