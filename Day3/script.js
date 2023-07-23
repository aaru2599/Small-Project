let count = 0;
let addAll = 0;
let s_no = [];
let price = [];
let quantity = [];
let productArr = [];
let i = 0;

function showCategory(category) {
  document.getElementById('productContainer').innerHTML = '';
  switch (category) {
    case 'fruits':
      showProducts(
        ['Mango', 'Apple', 'Banana', 'Pineapple', 'Papaya'],
        [200, 250, 50, 70, 60]
      );
      break;
    case 'vegetables':
      showProducts(
        ['Tomato', 'Spinach', 'Beetroot', 'Potato', 'Brinjal'],
        [60, 20, 50, 35, 45]
      );
      break;
    case 'cosmetics':
      showProducts(
        ['Kajal', 'Lipstick', 'Nail Polish', 'Face Powder', 'Lotion'],
        [50, 20, 30, 70, 120]
      );
      break;
    case 'masala':
      showProducts(
        ['Turmeric Powder', 'Garam Masala', 'Sambar Powder', 'Ginger Powder', 'Chicken Masala'],
        [330, 600, 360, 350, 370]
      );
      break;
    default:
      break;
  }
}

function showProducts(products, prices) {
  const productContainer = document.getElementById('productContainer');
  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.setAttribute('onclick', `addToCart(${index})`);
    productCard.innerHTML = `<h3>${product}</h3><p>Price: Rs.${prices[index]}</p>`;
    productContainer.appendChild(productCard);
  });
}

function addToCart(index) {
  const productName = productArr[index];
  const productPrice = price[index];
  const productQuantity = parseInt(prompt(`How many ${productName}(s) do you need?`));
  if (!isNaN(productQuantity) && productQuantity > 0) {
    quantity[i] = productQuantity;
    price[i] = productQuantity * productPrice;
    addAll += price[i];
    s_no[i] = ++count;
    productArr[i] = productName;
    i++;
  }
}

function checkout() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let totalPrice = 0;
  for (let k = 0; k < count; k++) {
    const listItem = document.createElement('li');
    listItem.innerText = `${s_no[k]}. ${quantity[k]} ${productArr[k]} - Rs.${price[k]}`;
    cartItems.appendChild(listItem);
    totalPrice += price[k];
  }
  document.getElementById('totalPrice').innerText = totalPrice;
  document.getElementById('cart').style.display = 'block';
  document.getElementById('productContainer').innerHTML = '';
  count = 0;
  addAll = 0;
  s_no = [];
  price = [];
  quantity = [];
  productArr = [];
  i = 0;
}
// ... Existing code ...
// ... Existing code ...

// ... Existing code ...

function generateBill() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice').innerText;
    const customerName = prompt('Enter your name:');
    const customerAddress = prompt('Enter your address:');
    const customerContact = prompt('Enter your contact no:');
  
    if (customerName && customerAddress && customerContact) {
      const billContent = `
        -------Welcome to Organic Store-------
        Name: ${customerName}
        Address: ${customerAddress}
        Contact no.: ${customerContact}
        -------------------------------------
        S.no   |   Qty  | Name                | Price
        -------------------------------------
        ${getCartItemsList()}
        -------------------------------------
        Total bill of purchased items: Rs.${totalPrice}
        ${calculateDiscount(totalPrice)}
        Final bill is: Rs.${calculateFinalPrice(totalPrice)}
        =====Thank you for Shopping! You saved Rs.${calculateDiscount(totalPrice)}======
        -------------------------------------
        Java is Awesome
      `;
  
      document.getElementById('billContent').innerText = billContent;
      document.getElementById('billSection').style.display = 'block';
      resetCart();
    } else {
      alert('Please provide valid customer information.');
    }
  }
  
  // ... Rest of the code ...
  
  // ... Rest of the code ...
  