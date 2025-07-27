// consts & variables
let counter = 1;
let delivery = 2.5;
let basketArticles = {};
let starRating = 4.2;

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
  let maxWidth = window.innerWidth;
  if (maxWidth <= 1020) {
    document.getElementById('two').style.display = 'none';
  } else {
    document.getElementById('two').style.display = 'block';
  };
  document.getElementById('shoppingBasket').style.display ='flex';
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

// basket update / basket builder
function updateBasket() {
  let totalPrice = 0;
  let counterSum = 0;
  let oneDish = document.getElementById('basket');
  oneDish.innerHTML = '';
  for (let key in basketArticles) {
    let item = basketArticles[key];
    let multiplePrice = item.price * item.counter;
    basketBuilder(oneDish, item.name, item.counter, multiplePrice);
    counterSum += item.counter;
    totalPrice += multiplePrice;};
  totalPrice += delivery;
  deliveryCost();
  priceForAllDishes(totalPrice);
  checkBasketSize(counterSum);
  checkVisibility(totalPrice);
};

function basketBuilder(oneDish, itemName, itemCounter, multiplePrice){
  oneDish.innerHTML += `<div class='innerBasket'>
    <div class="upper">        
        <div id='article'>${itemName}</div>
        <div id='price'>${multiplePrice.toFixed(2)} €</div>
    </div>
    <div class="lower">
        <button id="minus" onclick='minusOne("${itemName}")'><img src="./assets/icons/minus.png"></button>
        <div id='counter-${itemName}'>${itemCounter}</div>
        <button id="plus" onclick='plusOne("${itemName}")'><img src="./assets/icons/plus.png"></button>
        <div id="bin" onclick='moveToBin("${itemName}")'><img src="./assets/icons/bin.png" alt="Mistkorb"></div></div>
    </div>
    </div>`
};

// buttons plus minus & delete
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

function moveToBin(name) {;
  delete basketArticles[name];
  updateBasket();
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
  if(document.getElementById('two').style.display =='block')
    {document.getElementById('two').style.display ='none'}
  else if(document.getElementById('two').style.display =='none')
    {document.getElementById('two').style.display ='block'};
};

function checkVisibility(totalPrice) {
  let maxWidth = window.innerWidth;
  if (maxWidth <= 1019 && document.getElementById('two').style.display == 'block'){
    document.getElementById('two').style.display = 'block'
  } else {
    document.getElementById('two').style.display = 'none';
  };
  if (maxWidth <= 1019 && document.getElementById('two').style.display == 'none'){
    document.getElementById('two').style.display = 'none';
    document.getElementById('shoppingBasket').style.display = 'flex';
  };
  if(totalPrice <= 2.5){
    document.getElementById('shoppingBasket').style.display ='none';
    document.getElementById('two').style.display = 'none';
  };
};

// totalPrice > 2.5 && 

 // get all dishes
function displayDishes(dishArray, targetDivId) {
  const targetDiv = document.getElementById(targetDivId);
  targetDiv.innerHTML = '';
  for (let index = 0; index < dishArray.length; index++){
    let element = dishArray[index];
    targetDiv.innerHTML += `
    <div id="oneDish" onclick='intoBasket(${JSON.stringify(element)})'>
      <div class="articleStructure"><div id="theDish">"${element.name}"</div>
      <div id="theDescription">${element.description}</div>
      <div id="thePrice">${element.price.toFixed(2)} €</div></div>
      <div class="addTo"><img src="./assets/icons/plus.png" alt="plusButton"></div>`
  };};
displayDishes(dishes, "allDishes");
displayDishes(sideDishes, "sidedishes");
displayDishes(desserts, "dessert");

// auslagerungen
function stars(){
  document.getElementById('rating').innerText =  ` ` + `${starRating} von 5 Sternen`
};
stars();

function deliveryCost(){
  document.getElementById('delivery').innerHTML = `<div>Lieferkosten:</div><div> ${delivery.toFixed(2)} €</div> `;
};

function priceForAllDishes(totalPrice){
  document.getElementById('priceAllDishes').innerHTML = `<div>${'Gesamtpreis:'}</div><div><strong>${totalPrice.toFixed(2)} €</strong></div>`;
};

function checkBasketSize(counterSum){
  if(counterSum > 0){
    document.getElementById('counterSize').innerHTML = counterSum;
  } else if(counterSum == 0){
    document.getElementById('counterSize').innerHTML = '';
  };
};