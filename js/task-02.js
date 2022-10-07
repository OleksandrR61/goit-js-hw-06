const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector("#ingredients").append(...ingredients.map(element => {
  const elementOfList = document.createElement('li');
  elementOfList.textContent = element;
  elementOfList.classList.add("item");
  return elementOfList;
}));