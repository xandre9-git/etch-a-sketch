// main container setup

const body = document.querySelector("body");
const container = document.createElement("div");
container.id = "main-container";
container.style.margin = "auto";
body.appendChild(container);

// heading

const h1 = document.createElement("h1");
h1.textContent = "Sketch An Etch";
h1.style.textAlign = "center";
body.insertBefore(h1, container);

// buttons

// grid container

const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.width = "50px";
gridContainer.style.height = "50px";
gridContainer.style.margin = "auto";
gridContainer.style.textAlign = "center";
container.appendChild(gridContainer);

// reset button

const divButton = document.createElement("div");
divButton.className = "top-buttons";
divButton.style.textAlign = "center";
divButton.style.margin = "auto";
divButton.style.marginBottom = "2.5%";
container.insertBefore(divButton, gridContainer);

const resetButton = document.createElement("button");
resetButton.id = "reset-button";
resetButton.textContent = "Reset";

divButton.appendChild(resetButton);

// reset grid size inquiry function

function gridSize() {
  let res = prompt("How many squares per side for this grid?");
  while (!(res >= 1 && res <= 100)) {
    res = prompt("Enter a number between 1 and 100 please.");
  }
  return res;
}

// square box creator function

function createSquare(parent) {
  const squareDiv = document.createElement("div");
  squareDiv.className = "square-box";
  squareDiv.style.height = "50px";
  squareDiv.style.width = "50px";
  squareDiv.style.backgroundColor = "#c9c9c9";
  squareDiv.style.border = "1px solid #979797";
  parent.appendChild(squareDiv);
}

// grid creator function

let gridCreator = (gridSize) => {
  
  function delChildren() {
    let child = gridContainer.lastElementChild;
    while (child) {
      gridContainer.removeChild(child);
      child = gridContainer.lastElementChild;
    }
  }

  delChildren();

  gridContainer.style.width = `${gridSize * 50 + gridSize * 4}px`;
  for (i = 0; i < gridSize; i++) {
    createSquare(gridContainer);
    if (gridContainer.style.width != gridContainer.style.height) {
      for (j = 1; j < gridSize; j++) {
        createSquare(gridContainer);
      }
    }
  }
  gridContainer.style.height = `${gridSize * 50 + gridSize * 4}px`;
};

// mouseover function

const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    if (e.target.className == "square-box") {
      // change the box to darker grey
      e.target.style.backgroundColor = "#979797";
    }
  });
});

gridCreator(16)
// gridCreator(gridSize());

let resetFunction = document.getElementById("reset-button");
resetFunction.addEventListener("click", function () {
  let grids = gridSize();
  console.log(grids)
  gridCreator(grids);
});
