const container = document.createElement("div");
document.body.appendChild(container);


container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 220px", )

for (let i = 1; i <= 55; i++) {
  const box = document.createElement("div");
  box.setAttribute("style", "box-sizing: border-box; border: solid #5b6dcd 3px; width: 20px; height: 20px; flex-shrink: 0;");
  box.setAttribute("class", "boxy");
  container.appendChild(box);
}

const containerChildren = container.querySelectorAll("div");


for (let box of containerChildren) {
  box.addEventListener('mouseover', () => {
    box.style.borderColor = "red";
    box.addEventListener('mouseout', () => {
      box.style.borderColor = "#5b6dcd";
    });
 });
}
