const container = document.querySelector('#container');
const rowButton = document.querySelector('.makeRows');
const clearButton = document.querySelector('.clear');
const randomButton = document.querySelector('.random');
let hoverType = 'black';
function defaultGrid() {
	createGrid(16, 16);
}

function createGrid(row, cell) {
	container.style.setProperty('--grid-rows', row);
	container.style.setProperty('--grid-col', cell);

	for (let i = 0; i < row * cell; i++) {
		let div = document.createElement('div');
		container.appendChild(div).className = 'grid';
	}
	onHover();
}

function clear() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function onHover() {
	const grids = document.querySelectorAll('.grid');
	grids.forEach((item) => {
		const num1 = Math.floor(Math.random() * 256);
		const num2 = Math.floor(Math.random() * 256);
		const num3 = Math.floor(Math.random() * 256);
		item.addEventListener('mouseover', function() {
			if (hoverType == 'black') {
				item.style.background = 'black';
			} else {
				item.style.background = `rgb(${num1}, ${num2}, ${num3})`;
			}
		});
	});
}

rowButton.addEventListener('click', function() {
	const row = prompt('Row');
	const cell = prompt('Cell');
	if (row < 0 || cell < 0) return;
	clear();
	createGrid(parseInt(row), parseInt(cell));
});

clearButton.addEventListener('click', function() {
	clear();
});
randomButton.addEventListener('click', function() {
	if (hoverType == 'black') {
		hoverType = 'random';
	} else {
		hoverType = 'black';
	}
});

defaultGrid();
onHover();
