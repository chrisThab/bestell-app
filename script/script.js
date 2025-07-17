
// mit inspiration von YOUTUBE: web dev simplified shopping cart

// consts & variables
let counter = 1;
let delivery = 2.5;
let basketArticles = {};
let starRating = 4.2;


function stars(){
  document.getElementById('rating').innerText =  ` ` + `${starRating} von 5 Sternen`
};
stars();

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

function allSideDishes() {
  for (let index = 0; index < sideDishes.length; index++) {
    let element = sideDishes[index];
    element = document.getElementById("sidedishes").innerHTML += `
        <div id="oneDish" onclick="intoBasket(sideDishes[${index}])">
            <div id="theDish">"${element.name}"</div>
            <div id="theDescription">${element.description}</div>
            <div id="thePrice">${element.price.toFixed(2)} €</div>
        </div>`;
    };};
allSideDishes();

function allDesserts() {
  for (let index = 0; index < desserts.length; index++) {
    let element = desserts[index];
    element = document.getElementById("dessert").innerHTML += `
        <div id="oneDish" onclick="intoBasket(desserts[${index}])">
            <div id="theDish">"${element.name}"</div>
            <div id="theDescription">${element.description}</div>
            <div id="thePrice">${element.price.toFixed(2)} €</div>
        </div>`;
    };};
allDesserts();

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
    window.location.href='http://127.0.0.1:5501/script/indexPayment.html';
  }, 4000);
};