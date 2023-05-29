const categoriesList = document.querySelectorAll(`ul#categories > li.item`);
console.log("Number of categories:", categoriesList.length);

categoriesList.forEach((category) => {
  const categoriesTitle = category.querySelector(`h2`).textContent;
  const categoriesElements = category.querySelectorAll(`li`).length;

  console.log(`Category`, categoriesTitle);
  console.log(`Elements`, categoriesElements);
});
