const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
document.body.appendChild(containerDiv);

for (let i = 1; i <= 16; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('row-container');
  containerDiv.appendChild(gridDiv);
  for (let j = 1; j <= 16; j++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = `GRID-${j}`;
    gridDiv.appendChild(grid);
  }
}

const gridItems = document.querySelectorAll('.grid');
gridItems.forEach((e) =>
  e.addEventListener('mouseover', function () {
    e.classList.add('color');
  })
);
