console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    if (basket.length < maxItems) {
        basket.push(item);
        console.log('An item was added to the basket: True'); //Added 'True' text for testing clarification.
        return true;
    }
    else {
        console.log('An item was added to the basket: False'); //Added 'false' text for testing clarification.
        return false
    }
}
console.log('in function addItem. I have added tomato and so this should return true.', addItem('tomato'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added lettuce and so this should return true.', addItem('lettuce'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added bacon and so this should return true.', addItem('bacon'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added brisket and so this should return true.', addItem('brisket'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added pizza and so this should return true.', addItem('pizza'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added almonds, but I was above the cart maximum and so this should return false.', addItem('almonds'));
console.log(`Basket is now ${basket}`);

function listItems() {
    console.log('Here are the items in my basket:');
    for (product of basket) {
        console.log(product);
    }
}
listItems()

function empty() {
    basket = [];
    console.log('You have reset your basket, it now contains the following items:', basket);
}
empty();

function full() {
    if (basket >= maxItems) {
        console.log('Your basket is full: True'); //Added 'True' text for testing clarification.
        return true;
    }
    else
        console.log('Your basket is full: False'); //Added 'false' text for testing clarification.
    return false;
}
console.log(full());

console.log('in function addItem. I have added tomato and so this should return true.', addItem('tomato'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added lettuce and so this should return true.', addItem('lettuce'));
console.log(`Basket is now ${basket}`);

function removeItem(item) {
    let index = basket.indexOf(item);
    if (index > -1) {
        console.log('the following item has been removed from your basket', basket.splice(index, 1, ''));
        return basket; // Returning the basket just to ensure that the code has been executed correctly.
    }
    else
        console.log(item, 'was not in the basket!');
    return null;
}
console.log(removeItem('lettuce')); //Removing something that is there.
console.log(removeItem('bbq')); //Trying to remove something that is not there.
listItems(); //Checking my basket again.
