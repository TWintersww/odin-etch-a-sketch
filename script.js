//UI
let gridBody = document.querySelector('.gridBody');
let gridSize = parseInt(prompt("Enter in a size: "));

function generateBoard(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            gridBody.appendChild(generateDiv(gridBody.clientWidth/gridSize));
            
        }
    }
}
function generateDiv(dim) {
    let div = document.createElement('div');
    div.classList.add('box');

    let dimMinusBorder = dim - 2;
    div.style.width = `${dimMinusBorder}px`;
    div.style.height = `${dimMinusBorder}px`;

    //add event handler for each box that activates upon event "hover"
    div.addEventListener('mouseover', shadeIn);

    return div;
}
function shadeIn() {
    if (event.target.matches('.box')) {
        event.target.classList.add('active');
    }
}
//Loading code
generateBoard(gridSize);
