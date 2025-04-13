const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);

mainContainer.setAttribute("style", `display: flex;
     flex-wrap: wrap;
      width: 960px;`)

for (let i = 1; i <= 16; i++) { 
  const previewSubCont = document.createElement("div");
  previewSubCont.setAttribute("style", "display: flex; width: 960px");
    for (let x = 1; x <= 16; x++) {
      const previewSubContBox = document.createElement("div");
      previewSubCont.appendChild(previewSubContBox);
      boxStyling(previewSubContBox);
    };
  mainContainer.appendChild(previewSubCont);
};
borderChangeColor(mainContainer.querySelectorAll("div"));

const mainContainerChildren = mainContainer.querySelectorAll("div");

// function makeGrid(mContainer) {
//   for (let i = 1; i <= 16; i++) { 
//     const previewSubCont = document.createElement("div");
//     previewSubCont.setAttribute("style", "display: flex; width: 960px");
//       for (let x = 1; x <= 16; x++) {
//         const previewSubContBox = document.createElement("div");
//         previewSubCont.appendChild(previewSubContBox);
//         boxStyling(previewSubContBox);
//       };
//     mContainer.appendChild(previewSubCont);
//   };
//   borderChangeColor(mContainer.querySelectorAll("div"));
// };

function borderChangeColor(childrenPack) {
    for (let child of childrenPack) {
        child.addEventListener('mouseover', () => {
            child.style.borderColor = "red";
        });    
        child.addEventListener('mouseout', () => {
            child.style.borderColor = "#5b6dcd";
        });
    };
};

function boxStyling(childrenBox) {
  childrenBox.setAttribute("style", `box-sizing: border-box; 
    border: solid #5b6dcd 3px;
    width: 20px; height: 20px;
    flex-shrink: 0;`);
}

borderChangeColor(mainContainerChildren);

const promptButton = document.createElement("button");
promptButton.textContent = "Click me to change the grid";
promptButton.style.marginTop = "10px";
promptButton.setAttribute("id", "btn")
mainContainer.appendChild(promptButton);

promptButton.addEventListener('click', () => {

    const userPrompt = +prompt("How many of squares you want to appear per side?");
    
    if (userPrompt >= 100) alert("Your number can't be greater than 99");

    else {
        for (let subCont of mainContainerChildren) {
            if (subCont.getAttribute("id") != "btn") subCont.remove();
        }
        
        for (let i = 1; i <= userPrompt; i++) { 
            const subContainer = document.createElement("div");
            subContainer.setAttribute("style", "display: flex; width: 960px");
              for (let x = 1; x <= userPrompt; x++) {
                const subContBox = document.createElement("div");
                subContainer.appendChild(subContBox);
                boxStyling(subContBox);
              };
            mainContainer.appendChild(subContainer);
          };
        borderChangeColor(mainContainer.querySelectorAll("div"));

        mainContainer.appendChild(document.getElementById("btn"));
    }
});
