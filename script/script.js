function showSidebar() 
{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() 
{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function getDishes(element) 
{
    let theDish = document.getElementById("allDishes");
    theDish.innerHTML += `
    <div id="dishes">
        <div id="oneDish" onclick="addToBasket(${element.id})">
            <p>"${element.name}"</p>
            <p>${element.description}</p>
            <p>${element.price.toFixed(2)} €</p>
        </div>
        <div id="addbtn" onclick="addToBasket(${element.id})">
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

function getSideDishes() 
{
    sideDishes.forEach(element => {
        beilagen.innerHTML += `<div id="dishes">
        <div id="oneDish" onclick="addToBasket(${element.id})">
            <p>"${element.name}"</p>
            <p>${element.description}</p>
            <p>${element.price.toFixed(2)} €</p>
        </div>
        <div id="addbtn" onclick="addToBasket(${element.id})">
        </div>
    </div>`
    });
}
getSideDishes();

//dessert

function getDesserts()
{
    dessert = document.getElementById("desserts");
    for (let index = 0; index < desserts.length; index++) {
        dessert.innerHTML += `
        <div id="dishes">
            <div id="oneDish" onclick="addToBasket(${desserts[index].id})">
                <p>"${desserts[index].name}"</p>
                <p>${desserts[index].description}</p>
                <p>${desserts[index].price.toFixed(2)} €</p>
            </div>
            <div id="addbtn" onclick="addToBasket(${desserts[index].id})"></div>
        </div>`
    }
}
getDesserts();

//addbtn

function addToBasket(id)
{
    const articles = document.getElementById("articles");
    const dish = [...dishes, ...sideDishes, ...desserts].find(item => item.id === id);
    const cost = document.getElementById("price");
    const total = document.getElementById("total");
    const delivery = document.getElementById("delivery");
    let counter = 0;
    const taxes = 1.2;
    let totalPrice;
    
    if (dish) {
        articles.innerHTML += ` <div> <p>"${dish.name}"</p> </div> `;
        cost.innerHTML += `<div> <p>${dish.price.toFixed(2)} €</p> </div>`;
        counter.innerHTML += `<p> Stk. </p>`
    }
    delivery.innerHTML += `<p> Bei Lieferung: </p> <p> 2.50 € </p>`
    total.innerHTML += ` <p> Summe Gesamt:</p> <p> ${totalPrice} € </p> `
}