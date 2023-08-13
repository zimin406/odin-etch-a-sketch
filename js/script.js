const gridSizeButton = document.querySelector("button.grid-size-button");
const gridContainer = document.querySelector("div.grid-container");
let grid = 16;

function adjustGridSize(grid) {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
    const gridContainerStyle = window.getComputedStyle(gridContainer);
    const gridSize = +gridContainerStyle.getPropertyValue("width").slice(0, -2) / grid;
    for (let i = 0; i < grid; i++) {
        const smallContainer = document.createElement("div");
        smallContainer.style.height = `${gridSize}px`;
        smallContainer.style.display = "flex";
        gridContainer.appendChild(smallContainer);
        for (let j = 0; j < grid; j++) {
        const cell = document.createElement("div");
        cell.style.width = `${gridSize}px`;
        cell.style.height = `${gridSize}px`;
        cell.style.backgroundColor = "#F9F7F7";
        cell.style.boxSizing = "border-box";
        cell.style.border = "0.5px solid #112D4E";
        smallContainer.appendChild(cell);
        }
    }
}

gridSizeButton.addEventListener("click", (event) => {
    grid = +prompt("Adjust grid size to:");    
    adjustGridSize(grid);
})

adjustGridSize(16);

