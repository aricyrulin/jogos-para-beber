let moeda = document.querySelector('.moeda');
let caraButton = document.querySelector('#cara-button');
let coroaButton = document.querySelector('#coroa-button');
let caraNumb = caraButton.getAttribute('data-number');
let caraResult = Number(caraNumb);
let coroaNumb = coroaButton.getAttribute('data-number');
let coroaResult = Number(coroaNumb);
let result = document.querySelector('p');

caraButton.addEventListener('click', () => {
    result.innerHTML = '';
    let i = Math.floor(Math.random() * 2);
    moeda.style.animation = 'none';
    if (i === 0) {
        setTimeout(function () {
            moeda.style.animation = 'rodar-cara 3s forwards';
        }, 100);
    } else {
        setTimeout(function () {
            moeda.style.animation = 'rodar-coroa 3s forwards';
        }, 100);
    }
    setTimeout(checkResult, 3000);
    disableButton();
    function checkResult() {
        if (i === caraResult) {
            result.innerHTML = 'Ganhou! Jogue novamente';
        } else {
            result.innerHTML = 'Perdeu... Bebe!';
        }
    }
});

coroaButton.addEventListener('click', () => {
    result.innerHTML = '';
    let i = Math.floor(Math.random() * 2);
    moeda.style.animation = 'none';
    if (i === 0) {
        setTimeout(function () {
            moeda.style.animation = 'rodar-cara 3s forwards';
        }, 100);
    } else {
        setTimeout(function () {
            moeda.style.animation = 'rodar-coroa 3s forwards';
        }, 100);
    }
    setTimeout(checkResult, 3000);
    disableButton();
    function checkResult() {
        if (i === coroaResult) {
            result.innerHTML = 'Ganhou! Jogue novamente.';
        } else {
            result.innerHTML = 'Perdeu... Bebe!';
        }
    }
});

function disableButton() {
    caraButton.disabled = true;
    caraButton.style.backgroundColor = 'gray';
    coroaButton.disabled = true;
    coroaButton.style.backgroundColor = 'gray';
    setTimeout(function () {
        caraButton.disabled = false;
        caraButton.style.backgroundColor = '';
        coroaButton.disabled = false;
        coroaButton.style.backgroundColor = '';
    }, 3000);
}
