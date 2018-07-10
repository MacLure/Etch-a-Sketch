
function clearGrid() {
    var grid = document.getElementById("grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function createGrid(size) {
    var grid = document.querySelector('#grid');
    for(var i = 0; i < size * size; i++) {
      var pixel = document.createElement("div");
      pixel.classList.add("pixel");
      grid.appendChild(pixel);
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, auto)`);
    }
createGrid(16);

function modifyColor(){
    var grid = document.querySelectorAll(".pixel");
    grid.forEach((box) =>{
        box.addEventListener("mouseenter",(e) => {
            (box.style.opacity) ? box.style.opacity = parseFloat(box.style.opacity) + 0.1: box.style.opacity = 0.1;
        });
    });
}
modifyColor();

function clearCanvas() {
    var newSize = document.getElementById("sizeInpiut").value;
    var grid = document.querySelectorAll(".pixel");
    grid.forEach((box) =>{
        box.classList.remove("coloredPixel");
    }), 
    clearGrid();
    createGrid(newSize);
    modifyColor();
    };

document.getElementById("resetButton").addEventListener("click", clearCanvas);
