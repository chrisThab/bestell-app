// mit inspiration von YOUTUBE: web dev simplified shopping cart

// consts & variables
let counter = 1;
let delivery = 2.5;
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

// add to basket
function intoBasket(dishes) {
  document.getElementById('two').style = 'display: block';
  document.getElementById('outerBasket').style = 'display: flex';
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

// basket update
function updateBasket() {
  let oneDish = document.getElementById('basket');
  let totalPrice = 0;
  oneDish.innerHTML = '';
  for (let key in basketArticles) {
    let item = basketArticles[key];
    let multiplePrice = item.price * item.counter;
    oneDish.innerHTML += `
      <div class='innerBasket'>
        <div id='article'>${item.name}</div>
        <button id="minus" onclick='minusOne("${item.name}")'></button>
        <div id='counter-${item.name}'>${item.counter}</div>
        <button id="plus" onclick='plusOne("${item.name}")'></button>
        <div id='price'>${multiplePrice.toFixed(2)} €</div>
      </div>`;
      totalPrice += multiplePrice;
  };
  document.getElementById('priceAllDishes').innerHTML = `<div>${'Gesamtpreis:'}</div><div>${totalPrice.toFixed(2)} €</div>`;
  if (totalPrice == 0) {
    document.getElementById('outerBasket').style = 'display: none';
  };
};

// buttons plus minus
function plusOne(itemName) {
  if (basketArticles[itemName]) {
    if (basketArticles[itemName].counter == 50){
      document.getElementById('plus').disabled = true;
    } else {
    basketArticles[itemName].counter++;
    document.getElementById(`counter-${itemName}`).innerText = basketArticles[itemName].counter;
    };
    updateBasket();
  };
};

function minusOne(itemName) {
  if (basketArticles[itemName]) {
    if (basketArticles[itemName].counter > 1) {
      basketArticles[itemName].counter--;
      document.getElementById(`counter-${itemName}`).innerText = basketArticles[itemName].counter;
    } else {
      delete basketArticles[itemName];
    };
    updateBasket();
  };
};

// bestellung abschließen
function buyArticles() {
  document.getElementById('buy').innerText = 'Wir haben ihre Bestellung entgegengenommen ! \n Sie werden zur Zahlung weitergeleitet.';
  setTimeout(()=>{
    document.getElementById('buy').innerText = 'Sie haben eine Testbestellung abgeschloßen.';
    document.getElementById('basket').innerHTML = '';
    updateBasket();
  }, 4000);

};