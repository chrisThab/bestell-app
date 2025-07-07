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
function intoBasket(dishes) {
    let thePrice = dishes.price;
    thePrice = counter * thePrice;

    document.getElementById("articles").innerHTML += 
    `<div>${dishes.name}</div>`;
    
    document.getElementById("counter").innerHTML += 
    `<div>${counter}</div>`;

    document.getElementById("price").innerHTML += 
    `<div>${thePrice.toFixed(2) + " €"}</div>`;

    if (dishes.name == dishes.name) {
        counter++;
    };

    // document.getElementById("articles").innerHTML += 
    // `<div>${dishes.name}</div>`;
    // document.getElementById("counter").innerHTML += 
    // `<div>${counter}</div>`;
    // document.getElementById("price").innerHTML += 
    // `<div>${thePrice.toFixed(2) + " €"}</div>`;

    let endSum = 0;
    let priceWithDelivery = thePrice + delivery;
    document.getElementById("delivery").innerText = `Lieferung: 2,50 €`;
    document.getElementById("priceWithDelivery").innerText = `${priceWithDelivery.toFixed(2)} €`;
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
