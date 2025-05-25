function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


function getDishes(element) {
    let theDish = document.getElementById("allDishes");
    theDish.innerHTML += `
    <div id="dishes">
                <div id="oneDish">
                    <p>"${element.name}"</p>
                    <p>${element.description}</p>
                    <p>${element.price} €</p></div>
                <div id="addbtn"></div>
            </div>    
        `
}
function getEveryDish() {
    for (const element of dishes) {
        getDishes(element);
    }
}
getEveryDish();

function getSideDishes(element) {
    let theSideDish = document.getElementById("sideDishes");
    theSideDish.innerHTML += `<div class="dishView">
    <div class="theDishes">
        <p>"${element.name}"</p>
        <p>${element.description}</p>
        <p>${element.price} €</p>
    </div>
    <button onclick="addToBasket()" id="addbtn"></button>
    </div> `
}
function getEverySideDish() {
    for (const element of sideDishes) {
        getSideDishes(element);
    }
}
getEverySideDish();

//dessert

//addbtn

function addToBasket(element) {
    let addTo = document.getElementById('basket');
    addTo = document.innerHTML += `<div>
    <p>"${element.name}"</p>
    <p>${element.price} €</p>
    </div>`
}