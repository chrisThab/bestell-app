// consts & variables
let counter = 1;
let delivery = 2.5;
let basketArticles = {};
let starRating = 4.2;

// navbar toggle
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar")
  if(sidebar.style.display === "none" || sidebar.style.display === ''){
    sidebar.style.display = "block";
  } else if (sidebar.style.display === "block"){
    sidebar.style.display = "none";
  };
};

// navbar display none if clicked outside
function hideSidebar() {
  let sidebar = document.querySelector('.sidebar')
  if (sidebar.style.display === "block"){
    sidebar.style.display = "none";
  };
};

// add to basket
function intoBasket(dishes) {
    document.getElementById('two').style.display = 'none';
    document.getElementById('two').style.display = 'block';
  document.getElementById('shoppingBasket').style.display ='flex';
  if (basketArticles[dishes.name]) {
    basketArticles[dishes.name].counter++;
  } else { basketArticles[dishes.name] = {
    name: dishes.name,
    counter: 1,
    price: dishes.price
    };};
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
    oneDish.innerHTML += builder(item.name, item.counter, multiplePrice);
    counterSum += item.counter;
    totalPrice += multiplePrice;};
  totalPrice += delivery;
  deliveryCost();
  priceForAllDishes(totalPrice);
  checkBasketSize(counterSum);
  checkVisibility(totalPrice);
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

// finish the order
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
    {document.getElementById('two').style.display ='none';
      document.getElementById('outerBasket').style.display ='none'
    }
  else if(document.getElementById('two').style.display =='none')
    {document.getElementById('two').style.display ='block';
      document.getElementById('outerBasket').style.display ='block'
    };
};

 // get all dishes
function displayDishes(dishArray, targetDivId) {
  const targetDiv = document.getElementById(targetDivId);
  targetDiv.innerHTML = '';
  for (let index = 0; index < dishArray.length; index++){
    let element = dishArray[index];
    targetDiv.innerHTML += display(element);
  };};
displayDishes(dishes, "allDishes");
displayDishes(sideDishes, "sidedishes");
displayDishes(desserts, "dessert");

// small stuff / outsource
function stars(){
  document.getElementById('rating').innerText =  ` ` + `${starRating} von 5 Sternen`
};
stars();

function deliveryCost(){
  document.getElementById('delivery').innerHTML = `<div>Lieferkosten:</div><div> ${delivery.toFixed(2)} €</div> `;
};

function priceForAllDishes(totalPrice){
  document.getElementById('priceAllDishes').innerHTML = `
  <div>${'Gesamtpreis:'}</div>
  <div><strong>${totalPrice.toFixed(2)} €</strong></div>`;
};

function checkBasketSize(counterSum){
  if(counterSum > 0){
    document.getElementById('counterSize').innerHTML = counterSum;
  } else if(counterSum == 0){
    document.getElementById('counterSize').innerHTML = '';
  };
};

function checkVisibility(totalPrice){
  if(totalPrice <= 2.5){
    document.getElementById('shoppingBasket').style.display ='none';
    document.getElementById('two').style.display = 'none';
  };
};