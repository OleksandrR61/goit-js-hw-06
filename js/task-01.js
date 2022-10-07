function numberOfListItems(list) {
    return list.children.length;
}

function titleOfElement(element) {
    return element.querySelector('h2').textContent;
}

function listData(list) {
    [...list.children].forEach(element => {
        console.log(`Category: ${titleOfElement(element)}`);
        console.log(`Elements: ${numberOfListItems(element.querySelector('ul'))}`);
    });
}

const listOfCategoriesRef = document.querySelector('#categories');

console.log(`Number of categories: ${numberOfListItems(listOfCategoriesRef)}`);

listData(listOfCategoriesRef);
