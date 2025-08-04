
function builder(itemName, itemCounter, multiplePrice){
    return `
    <div class='innerBasket'>
        <div class="upper">        
            <div id='article'>${itemName}</div>
            <div id='price'>${multiplePrice.toFixed(2)} €</div>
        </div>
        <div class="lower">
            <button id="minus" onclick='minusOne("${itemName}")'><img src="./assets/icons/minus.png"></button>
            <div id='counter-${itemName}'>${itemCounter}</div>
            <button id="plus" onclick='plusOne("${itemName}")'><img src="./assets/icons/plus.png"></button>
            <div id="bin" onclick='moveToBin("${itemName}")'><img src="./assets/icons/bin.png" alt="Mistkorb"></div>
        </div>
    </div>`
};

function display(element){
    return `
    <div id="oneDish" tabindex='0'>
        <div class="articleStructure">
            <div id="theDish">"${element.name}"</div>
            <div id="theDescription">${element.description}</div>
            <div id="thePrice">${element.price.toFixed(2)} €</div>
        </div>
    <div class="addTo" tabindex="0" enterkeyhint="enter" onclick='intoBasket(${JSON.stringify(element)})'><img src="./assets/icons/plus.png" alt="plusButton"></div>`
};