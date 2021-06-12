// main container setup

const body = document.querySelector("body");
const container = document.createElement("div");
container.id = "main-container";
body.appendChild(container);

// heading 

const h1 = document.createElement("h1");
h1.textContent = "Sketch An Etch";
h1.style.textAlign = "center";
body.insertBefore(h1, container);

// grid container

const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.width = "50px";
gridContainer.style.height = "50px";
gridContainer.style.margin = "auto";
// gridContainer.style.position = "absolute";
// gridContainer.style.left = "50%";
// gridContainer.style.top = "50%";
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
  const squareDiv = document.createElement("div");
  squareDiv.className = "square-box";
  squareDiv.style.height = "50px";
  squareDiv.style.width = "50px";
  squareDiv.style.backgroundColor = "#c9c9c9";
  squareDiv.style.border = "1px solid #979797";
  parent.appendChild(squareDiv);
}

let gridCreator = (gridSize) => {
  gridContainer.style.width = `${(gridSize * 50) + (gridSize*4)}px`;

  // for loop needs to add blocks based on grid size
  // if 2, this means two blocks for width, and two blocks for height
  // 3, for 3 blocks wide and 3 blocks tall (blocks need to fill square)

  for (i = 0; i < gridSize; i++) {
    createSquare(gridContainer);
    console.log(i);
    console.log('square created in outer loop');
    if (gridContainer.style.width != gridContainer.style.height) {      
      for (j = 1; j < gridSize; j++) {
        createSquare(gridContainer);
        console.log('square created in inner loop');        
    }    
  }
}
  gridContainer.style.height = `${(gridSize * 50) + (gridSize*4)}px`;

}

gridCreator(16);
