const jogar = document.querySelector('.jogar');
const menor = document.querySelector('.button-1');
const igual = document.querySelector('.button-2');
const maior = document.querySelector('.button-3');
const dado1 = document.querySelector('.dado-1');
const dado2 = document.querySelector('.dado-2');
const somaAnterior = document.querySelector('.soma-anterior');
const somaAtual = document.querySelector('.soma-atual');
const result = document.querySelector('.resultado');

const dadosArray = [
    { img: './resources/images/dados/dado-1.png', number: 1 },
    { img: './resources/images/dados/dado-2.png', number: 2 },
    { img: './resources/images/dados/dado-3.png', number: 3 },
    { img: './resources/images/dados/dado-4.png', number: 4 },
    { img: './resources/images/dados/dado-5.png', number: 5 },
    { img: './resources/images/dados/dado-6.png', number: 6 },
];

let resultArray = [];

function randNumber() {
    const number = Math.floor(Math.random() * dadosArray.length);
    return number;
}

function rollFirst() {
    const number1 = randNumber();
    const number2 = randNumber();
    const somaDados = dadosArray[number1].number + dadosArray[number2].number;
    dado1.src = dadosArray[number1].img;
    dado2.src = dadosArray[number2].img;
    somaAtual.innerHTML = `Soma atual: ${somaDados}`;
    resultArray.push(somaDados);
    jogar.style.display = 'none';
    menor.style.display = 'initial';
    igual.style.display = 'initial';
    maior.style.display = 'initial';
}

function roll() {
    const number1 = randNumber();
    const number2 = randNumber();
    const somaDados = dadosArray[number1].number + dadosArray[number2].number;
    dado1.src = dadosArray[number1].img;
    dado2.src = dadosArray[number2].img;
    somaAnterior.innerHTML =
        'Soma anterior: ' + resultArray[resultArray.length - 1];
    somaAtual.innerHTML = `Soma atual: ${somaDados}`;
    resultArray.push(somaDados);
}

jogar.addEventListener('click', () => {
    rollFirst();
});

menor.addEventListener('click', () => {
    roll();
    if (
        resultArray[resultArray.length - 1] <
        resultArray[resultArray.length - 2]
    ) {
        result.innerHTML = 'Ganhou! Próximo.';
    } else {
        result.innerHTML = 'Perdeu... Bebe!';
    }
});

igual.addEventListener('click', () => {
    roll();
    if (
        resultArray[resultArray.length - 1] ===
        resultArray[resultArray.length - 2]
    ) {
        result.innerHTML = 'Ganhou! Próximo.';
    } else {
        result.innerHTML = 'Perdeu... Bebe!';
    }
});

maior.addEventListener('click', () => {
    roll();
    if (
        resultArray[resultArray.length - 1] >
        resultArray[resultArray.length - 2]
    ) {
        result.innerHTML = 'Ganhou! Próximo.';
    } else {
        result.innerHTML = 'Perdeu... Bebe!';
    }
});
