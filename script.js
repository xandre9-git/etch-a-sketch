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
gridContainer.style.width = "640px";
// gridContainer.style.height = "50px";
gridContainer.style.margin = "auto";
gridContainer.style.textAlign = "center";

container.appendChild(gridContainer);

// reset button

const divButton = document.createElement("div");
divButton.className = "top-buttons";
divButton.style.display = "flex";
divButton.style.justifyContent = "center";
divButton.style.textAlign = "center";
divButton.style.margin = "auto";
divButton.style.width = "50%";
divButton.style.marginBottom = "2.5%";
container.insertBefore(divButton, gridContainer);

const resetButton = document.createElement("button");
resetButton.id = "reset-button";
resetButton.textContent = "Reset";
divButton.appendChild(resetButton);

// rainbown mode button

const rainbowButton = document.createElement("button");
rainbowButton.id = "rainbow-button";
rainbowButton.textContent = "Rainbow";
divButton.appendChild(rainbowButton);

rainbowButton.addEventListener("click", function () {
  const rdivs = document.querySelectorAll("div");
  rdivs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      if (e.target.className == "square-box") {
        let randomRgb = (start, end) =>
          start + Math.floor(Math.random() * (end - start + 1));
        const r = randomRgb(0, 255);
        const g = randomRgb(0, 255);
        const b = randomRgb(0, 255);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    });
  });
});

// shade to black button

const gradientButton = document.createElement("button");
gradientButton.id = "gradient-button";
gradientButton.textContent = "Gradient Mode";
divButton.appendChild(gradientButton);

let sequence = (function () {
  let a = 0;
  return function () {
    if (a > 9 || a < 0) {
      a = 0;
    }
    console.log("A:", a);
    return a++;
  };
})();

gradientButton.addEventListener("click", function (e) {
  const sdivs = document.querySelectorAll("div");
  console.log(e);
  sdivs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      if (e.target.className == "square-box") {
        let shadesOfBlack = (old) => {
          // take old replace with new
          // pull old alpha value from existing target
          s = old.replace(/[^\d,]/g, "").split(",");
          console.log("Sequence:", sequence());
          e.target.style.backgroundColor = `rgba(${s[0] - s[0]}, ${
            s[1] - s[1]
          }, ${s[2] - s[2]}, 0.${sequence()})`;
          console.log(
            "e.target.bgColor:",
            (e.target.style.backgroundColor = `rgba(${s[0] - s[0]}, ${
              s[1] - s[1]
            }, ${s[2] - s[2]}, 0.${sequence()})`)
          );
        };
        shadesOfBlack(e.target.style.backgroundColor);
      }
    });
  });
});

// reset grid size inquiry function

function gridSize() {
  let res = prompt("How many squares per side for this grid?");
  while (!(res >= 1 && res <= 100)) {
    res = prompt("Enter a number between 1 and 100 please.");
  }
  return res;
}

// square box creator function

function createSquare(parent, size) {
  let boxSize = 640 / size;
  console.log(boxSize);
  const squareDiv = document.createElement("div");
  squareDiv.className = "square-box";
  squareDiv.style.height = `${boxSize}px`;
  squareDiv.style.width = `${boxSize}px`;
  squareDiv.style.backgroundColor = "#c9c9c9";
  squareDiv.style.boxSizing = "border-box";
  squareDiv.style.border = "1px solid #979797";
  squareDiv.style.display = "flex";
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

  // gridContainer.style.width = `${gridSize * 50 + gridSize * 2}px`;
  for (i = 0; i < gridSize; i++) {
    createSquare(gridContainer, gridSize);
    if (gridContainer.style.width != gridContainer.style.height) {
      for (j = 1; j < gridSize; j++) {
        createSquare(gridContainer, gridSize);
      }
    }
  }
  // gridContainer.style.height = `${gridSize * 50 + gridSize * 2}px`;
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

gridCreator(16); // default grid with width and height of 832px
// gridCreator(gridSize());

let resetFunction = document.getElementById("reset-button");
resetFunction.addEventListener("click", function () {
  let grids = gridSize();
  console.log(grids);
  gridCreator(grids);
});
