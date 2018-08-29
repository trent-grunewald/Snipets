
//Empty Cart array
let cart = [];
//Item class for the cart
class Item {
  //Constructor for the cart Item
 constructor (name, description, count, size) {
   this.name = name;
   this.description = description;
   this.count = count;
   this.size = size;
 }
};

//Add item to cart function
function addItemToCart(name, description, count, size) {
  for(let i in cart){
    //Looks for an item name in the cart
    if(cart[i].name === name) {
      //Adds to that item name if it exists.
      cart[i].count += count;
      return;
    }
  }
  //Creates a new item if it isn't already in the cart
  const item = new Item(name, description, count, size); 
  //Pushes the new item to the cart array
  cart.push(item);
  //Saves to local storage using my SaveCart function
  saveCart();
}

Removes a single item
 function removeItemFromCart(name) {
  for(let i in cart) {
    if(cart[i].name === name) {
      cart[i].count --;
      if(cart[i].count === 0) {
        cart.splice(i, 1)
      }
      break;
    }
  }
 }

//Removes all of a single item
function rclear CartemoveALLItemsFromCart(name) {
  for(let i in cart) {
    if(cart[i].name === name) {
      cart.splice(i, 1);
    }
  }
}

//Clear cart
function clearCart() {
  //Empties the cart array
  cart = [];
}

//Item count totals
function countCart() {
  //Starts the total at 0
  let total = 0;
  //Begins loop through the cart
  for(let i in cart) {
    //Adds the item count amount to the total count
    total += cart[i].count;
  }
  //returns the cart total
  return total;
};

//total cost
function totalCart() {
  let totalCost = 0;
  for(let i in cart) {
    totalCost += cart[i].price * cart[i].count;
  }
  return totalCost;
}

Creates a copy of the cart and returns it
function listCart() {
  //Cart copy array
  cartCopy = [];
  //Begin loop
  for(let i in cart) {
    //Loops through the cart array
    let item = cart[i];
    //Cart item copy object creation
    let itemCopy = {};
    //Begin loop through cart item properties
    for(let p in item) {
      //Loops through each property in the item and sets it to itemCopy
      itemCopy[p] = item[p];
    }
    //Pushes the copied item into the Cart Copy array
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}

//Save cart to Local Storage
function saveCart(){
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
};