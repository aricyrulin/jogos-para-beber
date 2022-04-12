const button = document.querySelectorAll('button');

const headsOrTails = [
    { lado: 'Deu cara', foto: './resources/images/moeda/cara.png' },
    { lado: 'Deu coroa', foto: './resources/images/moeda/coroa.png' },
];

function randNumber() {
    const number = Math.floor(Math.random() * headsOrTails.length);
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
    document.querySelector('img').src = headsOrTails[number].foto;
    document.querySelector('.lado').innerHTML = headsOrTails[number].lado;
    checkResult(number, numberSelected);
}

button.forEach(item => {
    item.addEventListener('click', () => {
        const numberSelected = item.getAttribute('data-number');
        flipCoin(Number(numberSelected));
    });
});
