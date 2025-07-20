 // get the dishes
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

let starRating = 4.2;

function stars(){
  document.getElementById('rating').innerText =  ` ` + `${starRating} von 5 Sternen`
};
stars();