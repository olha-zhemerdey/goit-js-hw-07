const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", handler);

function handler(event) {
  if (event.currentTarget.value.trim().length === 0) {
    output.textContent = "Anonymus";
    return;
  }

  output.textContent = event.currentTarget.value.trim();
}
