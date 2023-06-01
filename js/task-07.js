const fontSizeControl = document.querySelector("font-size-control");
const textElement = document.querySelector("text");

fontSizeControl.addEventListener("input", () => {
  fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
});
