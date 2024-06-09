function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/* ---------------------------------- */

const controls = document.getElementById("controls");
const numberInput = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const qty = parseInt(numberInput.value);
  if (qty >= 1 && qty <= 100) {
    createBoxes(qty);
    numberInput.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function createBoxes(qty) {
  destroyBoxes();
  const elements = [];
  let size = 30;
  for ( size ; size < (30 + qty * 10); size += 10) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box); 
  }
  if (size > 426) {
    boxesDiv.style.width = size + 64 +"px";
  } /* changes width of Div if size of Box larger than Div (+ padding32 *2 )*/
  boxesDiv.append(...elements);
}