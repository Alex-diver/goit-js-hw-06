const validationInput = document.querySelector("#validation-input");
const expectedLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value.trim();
  if (enteredValue.length === parseInt(expectedLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
