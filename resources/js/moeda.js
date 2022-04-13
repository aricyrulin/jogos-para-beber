const button = document.querySelectorAll('button');

function randNumber() {
    const number = Math.floor(Math.random() * 2);
    return number;
}

function checkResult(number, numberSelected) {
    if (numberSelected === number) {
        document.querySelector('.result').innerHTML = 'Ganhou! Próximo.';
    } else {
        document.querySelector('.result').innerHTML = 'Perdeu... Bebe!';
    }
}

function flipCoin(numberSelected) {
    const number = randNumber();
    if (number === 0) {
        setTimeout(function(){
            moeda.style.animation = 'rodar-cara 3s forwards';
        }, 100)
    } else if (number === 1) {
        setTimeout(function(){
            moeda.style.animation = 'rodar-coroa 3s forwards';
        }, 100)      
    checkResult(number, numberSelected);
}

button.forEach(item => {
    item.addEventListener('click', () => {
        const numberSelected = item.getAttribute('data-number');
        flipCoin(Number(numberSelected));
    });
});
