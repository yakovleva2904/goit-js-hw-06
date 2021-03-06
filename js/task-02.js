const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector('ul');
// console.log(list);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = ingredients[i];
//   list.appendChild(listItem);
// };

const list = document.querySelector('ul');
const ingredientList = (elements) => {
  return elements.map(element => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = element;
    return listItem;
  });
};
const ingredientItems = ingredientList(ingredients);
list.append(...ingredientItems);