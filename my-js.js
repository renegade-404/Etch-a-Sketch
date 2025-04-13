const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);

mainContainer.setAttribute("style", `display: flex;
     flex-wrap: wrap;
      width: 960px;`);

function makeGrid(mContainer, gridNumber) {
  for (let i = 1; i <= gridNumber; i++) { 
    const previewSubCont = document.createElement("div");
    previewSubCont.setAttribute("style", "display: flex; width: 960px");
      for (let x = 1; x <= gridNumber; x++) {
        const previewSubContBox = document.createElement("div");
        previewSubCont.appendChild(previewSubContBox);
        boxStyling(previewSubContBox);
      };
    mContainer.appendChild(previewSubCont);
  };
};

function randomRGB() {
  let r = Math.floor(Math.random () * 256);
  let g = Math.floor(Math.random () * 256);
  let b = Math.floor(Math.random () * 256);

  return `rgb(${r} ${g} ${b})`
};

function changeOpacity(x) {
  let xStyles = window.getComputedStyle(x);
  let xOpacity = xStyles.getPropertyValue("opacity");
  xOpacity = ((+xOpacity) + 0.1);
  if (x.style.opacity < 1) x.style.opacity = xOpacity;
};

function borderChangeColor(childrenPack) {
    for (let child of childrenPack) {
        child.addEventListener('mouseover', () => {
          let randColor = randomRGB();
          child.style.borderColor = randColor;
          changeOpacity(child);
        });    
    };
};

function boxStyling(childrenBox) {
  childrenBox.setAttribute("style", `box-sizing: border-box; 
    border: solid #5b6dcd 3px;
    width: 20px; height: 20px;
    flex-shrink: 0; opacity: 0`);
};

makeGrid(mainContainer, 16);

borderChangeColor(mainContainer.querySelectorAll("div"));
const mainContainerChildren = mainContainer.querySelectorAll("div");
borderChangeColor(mainContainerChildren);

const promptButton = document.createElement("button");
promptButton.textContent = "Click me to change the grid";
promptButton.style.marginTop = "10px";
promptButton.setAttribute("id", "btn");
mainContainer.appendChild(promptButton);

promptButton.addEventListener('click', () => {

    const userPrompt = +prompt("How many of squares you want to appear per side?");
    
    if (userPrompt >= 100) alert("Your number can't be greater than 99");

    else {
        for (let subCont of mainContainerChildren) {
            if (subCont.getAttribute("id") != "btn") subCont.remove();
        };
        makeGrid(mainContainer, userPrompt);
        borderChangeColor(mainContainer.querySelectorAll("div"));
        mainContainer.appendChild(document.getElementById("btn"));
    }
});
