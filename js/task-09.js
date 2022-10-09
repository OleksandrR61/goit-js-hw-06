function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector(".change-color").addEventListener("click", () => {
  const color = getRandomHexColor();

  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
})