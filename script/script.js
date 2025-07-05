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

function getDishes(){
    let oneDish = dishes[currentDish];
   
    document.getElementById('theDish').innerHTML = `"${oneDish['name']}"`;
    document.getElementById('theDescription').innerHTML = oneDish['description'];
    document.getElementById('thePrice').innerHTML = `${oneDish['price'].toFixed(2)} €`;
    
};
getDishes();

let counter = 1;

function intoBasket(){
    let thePrice = dishes[currentDish].price;
    thePrice = counter * thePrice;

    document.getElementById('articles').innerHTML = dishes[currentDish].name;
    document.getElementById('counter').innerHTML = counter;
    document.getElementById('price').innerHTML = thePrice.toFixed(2) + ' €';
    if (document.getElementsByName('dishes[currentDish].name')){
        counter++;
    }
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

//addbtn
