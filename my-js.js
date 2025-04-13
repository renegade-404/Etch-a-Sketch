const container = document.createElement("div");
document.body.appendChild(container);

container.setAttribute("style", `display: flex;
     flex-wrap: wrap;
      width: 220px;`)

for (let i = 1; i <= 55; i++) {
  const box = document.createElement("div");
  box.setAttribute("style", `box-sizing: border-box;
    border: solid #5b6dcd 3px;
    width: 20px; height: 20px;
    flex-shrink: 0;`);
  container.appendChild(box);
}

const containerChildren = container.querySelectorAll("div");


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

borderChangeColor(containerChildren)

const promptButton = document.createElement("button");
promptButton.textContent = "Click me to change the grid";
promptButton.style.marginTop = "10px";
promptButton.setAttribute("id", "btn")
container.appendChild(promptButton);

promptButton.addEventListener('click', () => {

    const userPrompt = +prompt("How many of squares you want to appear per side?");
    
    if (userPrompt >= 100) alert("Your number can't be greater than 99");

    else {
        for (let box of containerChildren) {
            if (box.getAttribute("id") != "btn") box.remove();
        }
        
        for (let i = 1; i <= userPrompt; i++) { 
            const box = document.createElement("div"); //change this to a function
            box.setAttribute("style", `box-sizing: border-box; 
              border: solid #5b6dcd 3px;
              width: 20px; height: 20px;
              flex-shrink: 0;`);
            container.appendChild(box);
          };
        borderChangeColor(container.querySelectorAll("div"));

        container.appendChild(document.getElementById("btn"));
    }
});
