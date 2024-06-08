function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  /* ------------------------------------- */
  
  const body = document.body;
  const span = document.querySelector(".color");
  const btnChangeColor = document.querySelector(".change-color");
  
  btnChangeColor.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    span.style.color = newColor;
    span.textContent = newColor;
  });