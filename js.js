// Get all the necessary elements from the HTML
const items = Array.from(document.getElementsByClassName('item'));
const quantityValues = Array.from(document.getElementsByClassName('quantity-value'));
const minusButtons = Array.from(document.getElementsByClassName('minus'));
const plusButtons = Array.from(document.getElementsByClassName('plus'));
const deleteButtons = Array.from(document.getElementsByClassName('delete'));
const likeButtons = Array.from(document.getElementsByClassName('like'));
const totalPriceElement = document.getElementById('total-price');

// Add event listeners for quantity adjustment, deletion, and liking
items.forEach((item, index) => {
  minusButtons[index].addEventListener('click', () => decreaseQuantity(index));
  plusButtons[index].addEventListener('click', () => increaseQuantity(index));
  deleteButtons[index].addEventListener('click', () => deleteItem(index));
  likeButtons[index].addEventListener('click', () => toggleLike(index));
});

// Initialize the total price
let totalPrice = 0;

// Function to decrease the quantity of an item
function decreaseQuantity(index) {
  let quantity = parseInt(quantityValues[index].textContent);
  if (quantity > 1) {
    quantity--;
    quantityValues[index].textContent = quantity;
    updateTotalPrice();
  }
}

// Function to increase the quantity of an item
function increaseQuantity(index) {
  let quantity = parseInt(quantityValues[index].textContent);
  quantity++;
  quantityValues[index].textContent = quantity;
  updateTotalPrice();
}

// Function to delete an item
function deleteItem(index) {
  items[index].remove();
  updateTotalPrice();
}

// Function to toggle the like status of an item
function toggleLike(index) {
  likeButtons[index].classList.toggle('active');
}

// Function to update the total price
function updateTotalPrice() {
  totalPrice = 0;
  quantityValues.forEach((quantityValue, index) => {
    let quantity = parseInt(quantityValue.textContent);
    let itemPrice = getItemPrice(index);
    totalPrice += quantity * itemPrice;
  });
  totalPriceElement.textContent = formatPrice(totalPrice);
}

// Function to get the price of an item based on its index
function getItemPrice(index) {
  // Replace this with your own logic to get the price of an item
  // For simplicity, we'll assume each item has a price of $10
  return 10;
}

// Function to format the price as a currency
function formatPrice(price) {
  return '$' + price.toFixed(2);
}

// Initial update of the total price
updateTotalPrice();
