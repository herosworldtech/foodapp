let cartCount = 0;
let cartItems = [];

const pricesInNaira = {
  'Cheese Burger': 8800,
  'Chicken Burger': 11200,
  'Salmon Burger': 7200
};

function toggleMenu() {
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.querySelector('.overlay');
  if (sideMenu.style.left === '0px') {
    sideMenu.style.left = '-250px';
    overlay.style.display = 'none';
  } else {
    sideMenu.style.left = '0px';
    overlay.style.display = 'block';
  }
}

function addToOrder(itemName) {
  cartCount++;
  cartItems.push(itemName);
  document.querySelector('.cart-count').textContent = cartCount;
  updateCartView();
}

function openPopup(itemName) {
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupPrice = document.getElementById('popup-price');
  
  popupTitle.textContent = itemName;
  popupPrice.textContent = `₦${pricesInNaira[itemName]}`;
  
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function updateCartView() {
  const orderItemsContainer = document.querySelector('.order-items');
  orderItemsContainer.innerHTML = '';
  let totalAmount = 0;

  cartItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('order-item');
    itemDiv.textContent = `${item} - ₦${pricesInNaira[item]}`;
    orderItemsContainer.appendChild(itemDiv);
    totalAmount += pricesInNaira[item];
  });

  document.getElementById('total-amount').textContent = totalAmount;
}
