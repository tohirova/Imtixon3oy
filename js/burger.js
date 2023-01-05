const burgerLayerElement = document.querySelector('.food-layers');
const btns = document.querySelector('.tugma');
const totalPriceEl = document.querySelector('.total-price');
const orderButton = document.querySelector('.order-button');
const resetButton = document.querySelector('.reset-button');
let totalSum = 2;
totalPriceEl.textContent = totalSum;

// modal





/////////////////////////////////////////////////////////////////////////////

function renderLayer(img, idOfElement, price) {
    if (img != '' && price != '') {
        let burgerImage = document.createElement('img');
        burgerImage.className = "image-layer";
        burgerImage.alt = 'burger Layer Image';
        burgerImage.src = img;
        totalPriceEl.textContent = totalSum
        burgerImage.id = idOfElement;
        burgerLayerElement.append(burgerImage);
    }
}

function removeLayer(idOfElement, price) {
    if (idOfElement != '' && price >= 2) {
        let removingElement = document.getElementById(idOfElement);
        burgerLayerElement.removeChild(removingElement);
        totalPriceEl.textContent = totalSum
    }
}

btns.addEventListener('click', (e) => {
    let button = e.target.className;
    switch (button) {
        case 'cheese-button':
            renderLayer('./burger-layers/cheese.svg', 'cheese', totalSum += 2);
            break;
        case 'meat-button':
            renderLayer('./burger-layers/meat.svg', 'meat', totalSum += 5);
            break;
        case 'onion-button':
            renderLayer('./burger-layers/onion.svg', 'onion', totalSum += 1)
            break;
        case 'salad-button':
            renderLayer('./burger-layers/salad.svg', 'salad', totalSum += 1)
            break;
        case 'tomato-button':
            renderLayer('./burger-layers/tomato.svg', 'tomato', totalSum += 2)
            break;
        case 'pickle-button':
            renderLayer('./burger-layers/pickle.svg', 'pickle', totalSum += 3)
            break;
        default:
            renderLayer('');
    }
})

burgerLayerElement.addEventListener('click', (e) => {
    let button = e.target.id;
    switch (button) {
        case 'cheese':
            removeLayer('cheese', totalSum -= 2);
            break;
        case 'meat':
            removeLayer('meat', totalSum -= 5);
            break;
        case 'onion':
            removeLayer('onion', totalSum -= 1)
            break;
        case 'salad':
            removeLayer('salad', totalSum -= 1)
            break;
        case 'tomato':
            removeLayer('tomato', totalSum -= 2)
            break;
        case 'pickle':
            removeLayer('pickle', totalSum -= 3)
            break;
        default:
            removeLayer('');
    }
});
resetButton.addEventListener("click", () => burgerLayerElement.innerHTML = '');
orderButton.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 25) + 10;
    confirm(`Order uchun raxmat sizdan ${totalSum} $ raqamingiz ${randomNumber}`);
});