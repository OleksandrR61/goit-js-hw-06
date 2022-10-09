function numberOfListItems(list) {
    return list.children.length;
}

function titleOfElement(element) {
    // return element.querySelector('h2').textContent;
    return element.firstElementChild.textContent;
}

function listData(list) {
    [...list.children].forEach(element => {
        console.log(`Category: ${titleOfElement(element)}`);
        // console.log(`Elements: ${numberOfListItems(element.querySelector('ul'))}`);
        console.log(`Elements: ${numberOfListItems(element.lastElementChild)}`);
    });
}

const listOfCategoriesRef = document.querySelector('#categories');

console.log(`Number of categories: ${numberOfListItems(listOfCategoriesRef)}`);

listData(listOfCategoriesRef);
