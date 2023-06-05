const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
