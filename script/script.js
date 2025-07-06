
// consts & varibles
let counter = 1;
let delivery = 2.5;

// navbar
function showSidebar() 
{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
};

function hideSidebar() 
{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};

let currentDish = 0;

// get the dishes

function allDishes(){
    for (let index = 0; index < dishes.length; index++) {
        let element = dishes[index];
        element = document.getElementById('allDishes').innerHTML += 
            `<div id="oneDish" onclick="intoBasket('thisDish')">
            <div id="theDish">"${dishes[index].name}"</div>
            <div id="theDescription">${dishes[index].description}</div>
            <div id="thePrice">${dishes[index].price} €</div>
            </div>`;
    };
};

allDishes();


// function getDishes(){
//     let oneDish = dishes[currentDish];

//         document.getElementById('theDish').innerHTML = `"${oneDish['name']}"`;
//         document.getElementById('theDescription').innerHTML = oneDish['description'];
//         document.getElementById('thePrice').innerHTML = `${oneDish['price']} €`;
//     };

// add to basket
function intoBasket(thisDish){
    let thePrice = thisDish.price;
    thePrice = counter * thePrice;

    document.getElementById('articles').innerHTML = thisDish.name;
    document.getElementById('counter').innerHTML = counter;
    document.getElementById('price').innerHTML = thePrice.toFixed(2) + ' €';
    if (document.getElementsByName('thisDish.name')){
        counter++;
    };
    let endSum;
    let priceWithDelivery = thePrice + delivery;
    document.getElementById('delivery').innerText = `Lieferung: 2,50 €`;
    document.getElementById('priceWithDelivery').innerText = `${priceWithDelivery.toFixed(2)} €`;
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