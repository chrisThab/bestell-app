// consts & variables
let counter = 1;
let delivery = 2.5;
let priceAllDishes;
let basketArticles = {};

// navbar
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

// get the dishes
function allDishes() {
  for (let index = 0; index < dishes.length; index++) {
    let element = dishes[index];
    element = document.getElementById("allDishes").innerHTML += `
        <div id="oneDish" onclick="intoBasket(dishes[${index}])">
            <div id="theDish">"${element.name}"</div>
            <div id="theDescription">${element.description}</div>
            <div id="thePrice">${element.price.toFixed(2)} €</div>
        </div>`;
    };};
allDishes();

// add to basket
function intoBasket(dishes) {
  document.getElementById('warenkorb').style = 'display: flex';
  if (basketArticles[dishes.name]) {
    basketArticles[dishes.name].counter++;
  } else { basketArticles[dishes.name] = {
    name: dishes.name,
    counter: 1,
    price: dishes.price
  };
};
updateBasket();
};

function updateBasket() {
  let oneDish = document.getElementById('basket');
  oneDish.innerHTML = '';
  let totalPrice = 0;
  for (let key in basketArticles) {
      let item = basketArticles[key];
      let multiplePrice = item.price * item.counter;
      oneDish.innerHTML += `
        <div class ='innerBasket'>
          <div id='article'>${item.name}</div>
          <div id='counter'>${item.counter}</div>
          <div id='price'>${multiplePrice.toFixed(2)} €</div>
          </div>`;
          totalPrice += item.price * item.counter;
        };
      document.getElementById('priceAllDishes').innerHTML = `<div>${'Gesamtpreis:'}</div><div>${totalPrice.toFixed(2)} €</div>`;
};