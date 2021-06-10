// main container setup

const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "main-container";
// container.style.margin = "auto"
body.appendChild(container);

// grid container

const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.width = "50px";
gridContainer.style.height = "50px";
gridContainer.style.margin = "auto";
gridContainer.style.position = "absolute";
gridContainer.style.left = "50%";
gridContainer.style.top = "50%";
container.appendChild(gridContainer);

let gridSize = () => {
  let res = prompt("How many squares per side for this grid?");

  while (!(res >= 1 && res <= 100)) {
    let res = prompt("Number must be from 1 to 100.");
    return res;
  }
  return res;
};

// console.log(gridSize());

// square div template

// const squareDiv = document.createElement("div");
// squareDiv.style.height = "50px";
// squareDiv.style.width = "50px";
// squareDiv.style.backgroundColor = "dodgerblue";
// gridContainer.appendChild(squareDiv);

// const anotherDiv = document.createElement("div");
// anotherDiv.style.height = "50px";
// anotherDiv.style.width = "50px";
// anotherDiv.style.backgroundColor = "rebeccapurple";
// gridContainer.appendChild(anotherDiv);

// const thirdDiv = document.createElement("div");
// thirdDiv.style.height = "50px";
// thirdDiv.style.width = "50px";
// thirdDiv.style.backgroundColor = "tomato";
// gridContainer.appendChild(thirdDiv);

// const lastDiv = document.createElement("div");
// lastDiv.style.height = "50px";
// lastDiv.style.width = "50px";
// lastDiv.style.backgroundColor = "forestgreen";
// gridContainer.appendChild(lastDiv);

// add square

function createSquare(parent) {
  const newSquare = document.getElementById("#grid-container");
  const squareDiv = document.createElement("div");
  squareDiv.className = "square-box";
  squareDiv.style.height = "50px";
  squareDiv.style.width = "50px";
  squareDiv.style.backgroundColor = "dodgerblue";
  squareDiv.style.border = "1px solid black";
  parent.appendChild(squareDiv);
}

let gridCreator = (gridSize) => {
  gridContainer.style.width = `${(gridSize * 50) + (gridSize*4)}px`;
  // gridContainer.style.height = `${gridSize * 50 + gridSize}px`;
  console.log(gridContainer);
  for (i = 0; i < gridSize; i++) {
    createSquare(gridContainer);
    if (gridContainer.style.width != gridContainer.style.height) {
      gridContainer.style.height = gridContainer.style.width;
      let createNewRow = document.createElement("div");
      createNewRow.className = 'test name'
      createNewRow.style.width = `${(gridSize * 50) + (gridSize*4)}px`;
      createNewRow.style.height = "50px";
      // gridContainer.appendChild(createNewRow);
      // createSquare(container)
      for (i = 1; i < gridSize; i++) {
        console.log(gridSize)
        // gridContainer.cloneNode(true);
        createSquare(gridContainer)
        // let cloneIt = gridContainer.cloneNode(true);
        // gridContainer.appendChild(cloneIt);
        console.log(gridContainer.style.height)
    }
    
  }

  // if (gridContainer) {
  //   let createNewRow = document.createElement("div");
  //   createNewRow.className = 'test name'
  //   createNewRow.style.width = `${(gridSize * 50) + (gridSize*4)}px`;
  //   createNewRow.style.height = "50px";
  //   // gridContainer.appendChild(createNewRow);
  //   // createSquare(container)
  // }

}

}

gridCreator(2);
