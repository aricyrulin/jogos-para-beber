let dadosArray = [
    { img: './resources/images/dados/dado-1.png', number: 1 },
    { img: './resources/images/dados/dado-2.png', number: 2 },
    { img: './resources/images/dados/dado-3.png', number: 3 },
    { img: './resources/images/dados/dado-4.png', number: 4 },
    { img: './resources/images/dados/dado-5.png', number: 5 },
    { img: './resources/images/dados/dado-6.png', number: 6 },
];
let resultArray = [];
let dados = document.querySelectorAll('.dado');
const dado1 = document.querySelector('#dado-1');
const dado2 = document.querySelector('#dado-2');
const somaAnterior = document.querySelector('.soma-anterior');
const somaAtual = document.querySelector('.soma-atual');
const result = document.querySelector('.resultado');
const jogar = document.querySelector('.jogar');
const menor = document.querySelector('.button-1');
const igual = document.querySelector('.button-2');
const maior = document.querySelector('.button-3');

function rollFirst() {
    jogar.style.display = 'none';
    menor.style.display = 'initial';
    igual.style.display = 'initial';
    maior.style.display = 'initial';
    let valorDadoUm = Math.floor(Math.random() * 6);
    let valorDadoDois = Math.floor(Math.random() * 6);
    const somaDados =
        dadosArray[valorDadoUm].number + dadosArray[valorDadoDois].number;
    resultArray.push(somaDados);
    dados.forEach(function (dado) {
        dado.classList.add('shake');
    });
    setTimeout(function () {
        dados.forEach(function (dado) {
            dado.classList.remove('shake');
        });
        dado1.setAttribute('src', dadosArray[valorDadoUm].img);
        dado2.setAttribute('src', dadosArray[valorDadoDois].img);
        somaAtual.innerHTML = `Soma atual: ${somaDados}`;
    }, 1000);
}

function roll() {
    let valorDadoUm = Math.floor(Math.random() * 6);
    let valorDadoDois = Math.floor(Math.random() * 6);
    const somaDados =
        dadosArray[valorDadoUm].number + dadosArray[valorDadoDois].number;
    resultArray.push(somaDados);
    dados.forEach(function (dado) {
        dado.classList.add('shake');
    });
    setTimeout(function () {
        dados.forEach(function (dado) {
            dado.classList.remove('shake');
        });

        dado1.setAttribute('src', dadosArray[valorDadoUm].img);
        dado2.setAttribute('src', dadosArray[valorDadoDois].img);
        somaAnterior.innerHTML =
            'Soma anterior: ' + resultArray[resultArray.length - 2];
        somaAtual.innerHTML = `Soma atual: ${somaDados}`;
    }, 1000);
}

function disableButton() {
    jogar.disabled = true;
    menor.disabled = true;
    igual.disabled = true;
    maior.disabled = true;
    jogar.style.backgroundColor = 'gray';
    menor.style.backgroundColor = 'gray';
    igual.style.backgroundColor = 'gray';
    maior.style.backgroundColor = 'gray';
    jogar.style.pointerEvents = 'none';
    menor.style.pointerEvents = 'none';
    igual.style.pointerEvents = 'none';
    maior.style.pointerEvents = 'none';
    setTimeout(function () {
        jogar.disabled = false;
        menor.disabled = false;
        igual.disabled = false;
        maior.disabled = false;
        jogar.style.backgroundColor = '';
        menor.style.backgroundColor = '';
        igual.style.backgroundColor = '';
        maior.style.backgroundColor = '';
        jogar.style.pointerEvents = 'auto';
        menor.style.pointerEvents = 'auto';
        igual.style.pointerEvents = 'auto';
        maior.style.pointerEvents = 'auto';
    }, 1000);
}

jogar.addEventListener('click', () => {
    disableButton();
    rollFirst();
});

menor.addEventListener('click', () => {
    disableButton();
    roll();
    setTimeout(function () {
        if (
            resultArray[resultArray.length - 1] <
            resultArray[resultArray.length - 2]
        ) {
            result.innerHTML = 'Ganhou! Jogue novamente.';
        } else {
            result.innerHTML = 'Perdeu... Bebe!';
        }
    }, 1000);
});

igual.addEventListener('click', () => {
    disableButton();
    roll();
    setTimeout(function () {
        if (
            resultArray[resultArray.length - 1] ===
            resultArray[resultArray.length - 2]
        ) {
            result.innerHTML = 'Ganhou! Jogue novamente.';
        } else {
            result.innerHTML = 'Perdeu... Bebe!';
        }
    }, 1000);
});

maior.addEventListener('click', () => {
    disableButton();
    roll();
    setTimeout(function () {
        if (
            resultArray[resultArray.length - 1] >
            resultArray[resultArray.length - 2]
        ) {
            result.innerHTML = 'Ganhou! Jogue novamente.';
        } else {
            result.innerHTML = 'Perdeu... Bebe!';
        }
    }, 1000);
});
