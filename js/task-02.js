const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElement = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add(`item`);
  ingredientsElement.appendChild(li);
});

console.log(ingredientsElement);
