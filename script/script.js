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
  document.getElementById('outerBasket').style = 'display: block';
  if (basketArticles[dishes.name]) {
    basketArticles[dishes.name].counter++;
  } else { basketArticles[dishes.name] = {
    name: dishes.name,
    counter: 1,
    price: dishes.price
  };
};
updateBasket();
checkWindowSize();
};

// basket update
function updateBasket() {
  let totalPrice = 0;
  let oneDish = document.getElementById('basket');
  oneDish.innerHTML = '';
  for (let key in basketArticles) {
    let item = basketArticles[key];
    let multiplePrice = item.price * item.counter;
    buildInnerBasket();
      totalPrice += multiplePrice;
    };
    totalPrice += delivery;
  document.getElementById('delivery').innerHTML = `<div>Lieferkosten:</div><div> ${delivery.toFixed(2)} €</div> `;
  document.getElementById('priceAllDishes').innerHTML = `<div>${'Gesamtpreis:'}</div><div><strong>${totalPrice.toFixed(2)} €</strong></div>`;
  checkVisibility(totalPrice);
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
    document.getElementById('buy').disabled = true;
    setTimeout(() =>{
      basketArticles = {};
      updateBasket();
      document.getElementById('buy').innerText = 'Jetzt bestellen !';
    }, 1500);
  }, 1500);
};

// basket toggle / visibility
function toggleBasket(){
  if (document.getElementById('two').style.display =='block') {
    document.getElementById('two').style.display ='none'
  } else if(document.getElementById('two').style.display =='none') {
  document.getElementById('two').style.display ='block';
};
};

function checkVisibility(totalPrice){
  if (totalPrice == 0 || totalPrice == 2.5) {
    document.getElementById('two').style.display ='none';
  } else {
    document.getElementById('two').style.display ='block';
  };
};

function checkWindowSize(totalPrice){
  let width = window.innerWidth;
  if(width < 1020 && totalPrice <= 2.5){
    document.getElementById('two').style.display ='none';
  };
};
checkWindowSize();