console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
basket.push (item);
console.log('Items added to the basket:',item);
return true;
}
console.log('in function addItem. I have added tomato and so this should return true.', addItem('tomato'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added lettuce and so this should return true.', addItem('lettuce'));
console.log(`Basket is now ${basket}`);
console.log('in function addItem. I have added bacon and so this should return true.', addItem('bacon'));
console.log(`Basket is now ${basket}`);

function listItems(){
    console.log('Here are the items in my basket:');
for (product of basket){
    console.log(product);
}
}
listItems()

function empty(){

}