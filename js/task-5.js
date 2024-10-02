function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

body.addEventListener("click", () => {
  const colorChange = getRandomHexColor();
  body.style.backgroundColor = colorChange;
  colorSpan.textContent = colorChange;
});
