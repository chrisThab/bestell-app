// consts & variables
let counter = 1;
let delivery = 2.5;
let currentDish = 0;

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
            <div id="thePrice">${element.price} €</div>
        </div>`;
    };};
allDishes();

// add to basket

let basketArticles = {};

function intoBasket(dishes) {
  if (basketArticles[dishes.name]) {
    basketArticles[dishes.name].counter++;
  } else { basketArticles[dishes.name] = {
    name: dishes.name,
    counter: 1,
    price: dishes.price
  };
  updateBasket();

  };
};

function updateBasket() {
  let oneItem = document.getElementById('basket');
  oneItem.innerHTML = ''; // Den Warenkorb leeren, bevor wir ihn aktualisieren
  for (let key in basketArticles) {
      let item = basketArticles[key];
      oneItem.innerHTML += `
        <div class ='innerBasket'>
          <div id='article'>${item.name}</div>
          <div id='counter'>${item.counter}</div>
          <div id='price'>${item.price * item.counter} €</div>
          </div>`
  };
};
//sidedishes

// let beilagen = document.getElementById("sideDishes");

// function getSideDishes(){
//     sideDishes.forEach(element => {
//         beilagen.innerHTML += `<div id="dishes">
//         <div id="oneDish" onclick="addToBasket(${element.id})">
//             <p>"${element.name}"</p>
//             <p>${element.description}</p>
//             <p>${element.price.toFixed(2)} €</p>
//         </div>
//         <div id="addbtn" onclick="addToBasket(${element.id})">
//         </div>
//     </div>`
//     });
// };
// getSideDishes();

// //dessert

// function getDesserts(){
//     dessert = document.getElementById("desserts");
//     for (let index = 0; index < desserts.length; index++) {
//         dessert.innerHTML += `
//         <div id="dishes">
//             <div id="oneDish" onclick="addToBasket(${desserts[index].id})">
//                 <p>"${desserts[index].name}"</p>
//                 <p>${desserts[index].description}</p>
//                 <p>${desserts[index].price.toFixed(2)} €</p>
//             </div>
//             <div id="addbtn" onclick="addToBasket()"></div>
//         </div>`
//     }
// };
// getDesserts();
