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
            <p>${element.price} €</p>
        </div>
        <div id="addbtn" onclick="addToBasket()">
        </div>
    </div>    
    `
}

function getEveryDish() {
    for (const element of dishes) {
        getDishes(element);
    }
}
getEveryDish();

//sidedishes

let beilagen = document.getElementById("sideDishes");

function getSideDishes() {
    sideDishes.forEach(element => {
        beilagen.innerHTML += `<div id="dishes">
        <div id="oneDish">
            <p>"${element.name}"</p>
            <p>${element.description}</p>
            <p>${element.price} €</p>
        </div>
        <div id="addbtn" onclick="addToBasket()">
        </div>
    </div>`
    });
}
getSideDishes();

//dessert

//addbtn

let basket = [];
basket = document.getElementById("basket");

function addToBasket() {
    if (basket === null) {
        return basket.map((dishes, idOfDishes))
    }
}