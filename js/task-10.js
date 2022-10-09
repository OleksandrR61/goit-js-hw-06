function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  // Первый вариант, показался слишком длинным
  // let boxes = [];
  
  // for (let i = 0; i < amount; i += 1) {
  //   const box = document.createElement("div");
  //   const sizeBox = 30 + i * 10;
    
  //   box.style.width = `${sizeBox}px`;
  //   box.style.height = `${sizeBox}px`;
  //   box.style.backgroundColor = getRandomHexColor();

  //   boxes.push(box);
  // }

  // document.querySelector("#boxes").append(...boxes);

  // Второй вариант, но первый все равно кажется более удачным
  let boxes = "";

  for (let i = 0; i < amount; i += 1) {
    const sizeBox = 30 + i * 10;

    boxes += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};"></div>`;
  }

  colorBoxes.insertAdjacentHTML("beforeend", boxes);
};

function destroyBoxes() {
  colorBoxes.querySelectorAll("div").forEach(div => {
    div.remove();
  });
};

const colorBoxes = document.querySelector("#boxes");

document.querySelector("[data-create]").addEventListener("click", () => {
  createBoxes(document.querySelector("input").value);
});

document.querySelector("[data-destroy]").addEventListener("click", destroyBoxes);