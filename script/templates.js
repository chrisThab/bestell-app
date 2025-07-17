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

let starRating = 4.2;

function stars(){
  document.getElementById('rating').innerText =  ` ` + `${starRating} von 5 Sternen`
};
stars();