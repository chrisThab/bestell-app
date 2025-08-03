// consts & variables
let counter = 1;
let delivery = 2.5;
let basketArticles = {};
let starRating = 4.2;

// navbar toggle
function toggleSidebar(event) {
  event.preventDefault();
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";
  } else if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  }
}

// navbar display none if clicked outside
function hideSidebar() {
  let sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  }
}

// add to basket
function intoBasket(dishes) {
  if (basketArticles[dishes.name]) {
    basketArticles[dishes.name].counter++;
  } else {
    basketArticles[dishes.name] = {
      name: dishes.name,
      counter: 1,
      price: dishes.price,
    };
  }
  updateBasket();
}

// basket update
function calculateTotals() {
  let totalPrice = 0;
  let counterSum = 0;
  for (let key in basketArticles) {
    let item = basketArticles[key];
    let multiplePrice = item.price * item.counter;
    counterSum += item.counter;
    totalPrice += multiplePrice;
  };
  totalPrice += delivery;
  return { totalPrice, counterSum };
}

function updateBasket() {
  let oneDish = document.getElementById("basket");
  oneDish.innerHTML = "";
  const { totalPrice, counterSum } = calculateTotals();
  for (let key in basketArticles) {
    let item = basketArticles[key];
    let multiplePrice = item.price * item.counter;
    oneDish.innerHTML += builder(item.name, item.counter, multiplePrice);
  };
  toggleShoppingBag(totalPrice);
  deliveryCost();
  priceForAllDishes(totalPrice);
  checkBasketSize(counterSum);
  checkVisibility(totalPrice);
}

// buttons plus minus & delete
function plusOne(itemName) {
  if (basketArticles[itemName]) {
    if (basketArticles[itemName].counter == 50) {
      document.getElementById("plus").disabled = true;
    } else {
      basketArticles[itemName].counter++;
      document.getElementById(`counter-${itemName}`).innerText =
        basketArticles[itemName].counter;
    }
    updateBasket();
  };
}

function minusOne(itemName) {
  if (basketArticles[itemName]) {
    if (basketArticles[itemName].counter > 1) {
      basketArticles[itemName].counter--;
      document.getElementById(`counter-${itemName}`).innerText =
        basketArticles[itemName].counter;
    } else {
      delete basketArticles[itemName];
    }
    updateBasket();
  };
}


// basket toggle
function toggleBasket() {
  let basket = document.getElementById("two");
  basket.classList.toggle("dFlex");
}

function toggleMediaBasket() {
  let mediaBasket = document.getElementById("two");
  let mediaDishes = document.getElementById("one");
  let mediaOuterBasket = document.getElementById("outerBasket");
  mediaBasket.classList.toggle("mediaBasket");
  mediaDishes.classList.toggle("mediaDNone");
  mediaOuterBasket.classList.toggle("dFlex");
}

function toggleShoppingBag(totalPrice) {
  let shoppingBag = document.getElementById("shoppingBasket");
  let imgBag = document.getElementById("imgShoppingBag");
  if (totalPrice >= 2.5) {
    imgBag.classList.remove("dNone");
    shoppingBag.classList.add("shoppingBasket");
    shoppingBag.classList.add("dFlex");
  };
  if (totalPrice <= 2.5) {
    imgBag.classList.add("dNone");
    shoppingBag.classList.remove("shoppingBasket");
    shoppingBag.classList.remove("dFlex");
  };
}

// get all dishes
function displayDishes(dishArray, targetDivId) {
  const targetDiv = document.getElementById(targetDivId);
  targetDiv.innerHTML = "";
  for (let index = 0; index < dishArray.length; index++) {
    let element = dishArray[index];
    targetDiv.innerHTML += display(element);
  };
}
displayDishes(dishes, "allDishes");
displayDishes(sideDishes, "sidedishes");
displayDishes(desserts, "dessert");

// finish the order
function buyArticles() {
  document.getElementById("buy").innerText =
    "Wir haben ihre Bestellung entgegengenommen!\nSie werden zur Zahlung weitergeleitet.";
  setTimeout(() => {
    document.getElementById("buy").innerText =
      "Sie haben eine Testbestellung abgeschloßen.";
    document.getElementById("buy").disabled = true;
    setTimeout(() => {
      basketArticles = {};
      updateBasket();
      document.getElementById("buy").innerText = "Jetzt bestellen !";
    }, 1500);
  }, 1500);
}

// small stuff / outsource
function stars() {
  document.getElementById("rating").innerText =
    ` ` + `${starRating} von 5 Sternen`;
}
stars();

function moveToBin(name) {
  delete basketArticles[name];
  updateBasket();
}

function deliveryCost() {
  document.getElementById("delivery").innerHTML = `<div>Lieferkosten:</div><div> ${delivery.toFixed(2)} €</div> `;
}

function priceForAllDishes(totalPrice) {
  document.getElementById("priceAllDishes").innerHTML = `
  <div>${"Gesamtpreis:"}</div>
  <div><strong>${totalPrice.toFixed(2)} €</strong></div>`;
}

function checkBasketSize(counterSum) {
  if (counterSum > 0) {
    document.getElementById("counterSize").innerHTML = counterSum;
  } else if (counterSum == 0) {
    document.getElementById("counterSize").innerHTML = "";
  }
}

function checkVisibility(totalPrice) {
  let refOI = document.getElementById("shoppingBasket");
  let refOII = document.getElementById("two");
  if (totalPrice <= 2.5) {
    refOI.classList.remove("dFlex");
    refOII.classList.remove("dFlex");
  }
}