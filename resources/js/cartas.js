const button = document.querySelector('.cartas__btn');
const carta = document.querySelector('.carta');
const cartaNome = document.querySelector('.cartas__title');
const desafio = document.querySelector('.desafio');

const cartas = [
    {
        carta: './resources/images/cartas/asOuros.webp',
        cartaNome: 'Ás de Ouros',
        desafio: 'Dê um shot.',
    },
    {
        carta: './resources/images/cartas/asEspadas.webp',
        cartaNome: 'Ás de Espadas',
        desafio: 'Escolha uma pessoa para beber.',
    },
    {
        carta: './resources/images/cartas/asCopas.webp',
        cartaNome: 'Ás de Copas',
        desafio:
            'Cante o refrão de uma música à sua escolha. No final, você bebe.',
    },
    {
        carta: './resources/images/cartas/asPaus.webp',
        cartaNome: 'Ás de Paus',
        desafio: 'Todos bebem.',
    },
    {
        carta: './resources/images/cartas/2Ouros.webp',
        cartaNome: 'Dois de Ouros',
        desafio: 'Dê dois shots.',
    },
    {
        carta: './resources/images/cartas/2Espadas.webp',
        cartaNome: 'Dois de Espadas',
        desafio: 'Escolha duas pessoas para beber.',
    },
    {
        carta: './resources/images/cartas/2Copas.webp',
        cartaNome: 'Dois de Copas',
        desafio: 'Distribua dois shots.',
    },
    {
        carta: './resources/images/cartas/2Paus.webp',
        cartaNome: 'Dois de Paus',
        desafio: 'Escolha uma pessoa para dar dois shots.',
    },
    {
        carta: './resources/images/cartas/3Ouros.webp',
        cartaNome: 'Três de Ouros',
        desafio: 'Distribua três shots.',
    },
    {
        carta: './resources/images/cartas/3Espadas.webp',
        cartaNome: 'Três de Espadas',
        desafio: 'Escolha três pessoas para beber.',
    },
    {
        carta: './resources/images/cartas/3Copas.webp',
        cartaNome: 'Três de Copas',
        desafio: 'Pessoa à esquerda e à direita bebem.',
    },
    {
        carta: './resources/images/cartas/3Paus.webp',
        cartaNome: 'Três de Paus',
        desafio:
            'Desafio em dobro: quando a próxima carta for tirada, você e quem tirou a carta farão o desafio.',
    },
    {
        carta: './resources/images/cartas/4Ouros.webp',
        cartaNome: 'Quatro de Ouros',
        desafio: 'Pessoa à direita bebe.',
    },
    {
        carta: './resources/images/cartas/4Espadas.webp',
        cartaNome: 'Quatro de Espadas',
        desafio: 'Pessoa à direita dá um shot. Pessoa à esquerda dá dois.',
    },
    {
        carta: './resources/images/cartas/4Copas.webp',
        cartaNome: 'Quatro de Copas',
        desafio: 'Dê duas voltas pela roda de shot direto da garrafa.',
    },
    {
        carta: './resources/images/cartas/4Paus.webp',
        cartaNome: 'Quatro de Paus',
        desafio: 'Escolha duas pessoas para dar dois shots cada.',
    },
    {
        carta: './resources/images/cartas/5Ouros.webp',
        cartaNome: 'Cinco de Ouros',
        desafio:
            'Faça um brinde especial para uma pessoa, e deem dois shots cada.',
    },
    {
        carta: './resources/images/cartas/5Espadas.webp',
        cartaNome: 'Cinco de Espadas',
        desafio: 'Você e alguém à sua escolha dão dois shots cada.',
    },
    {
        carta: './resources/images/cartas/5Copas.webp',
        cartaNome: 'Cinco de Copas',
        desafio:
            'Faça um brinde especial para uma pessoa, e deem um shot cada.',
    },
    {
        carta: './resources/images/cartas/5Paus.webp',
        cartaNome: 'Cinco de Paus',
        desafio: 'Você e alguém à sua escolha dão um shot direto da garrafa.',
    },
    {
        carta: './resources/images/cartas/6Ouros.webp',
        cartaNome: 'Seis de Ouros',
        desafio: 'Você, pessoa à direita e pessoa à esquerda bebem.',
    },
    {
        carta: './resources/images/cartas/6Espadas.webp',
        cartaNome: 'Seis de Espadas',
        desafio:
            'Você, pessoa à direita e pessoa à esquerda dão dois shots cada.',
    },
    {
        carta: './resources/images/cartas/6Copas.webp',
        cartaNome: 'Seis de Copas',
        desafio: 'Todos dão dois shots.',
    },
    {
        carta: './resources/images/cartas/6Paus.webp',
        cartaNome: 'Seis de Paus',
        desafio: 'Escolha duas cartas, e faça o desafio das duas.',
    },
    {
        carta: './resources/images/cartas/7Ouros.webp',
        cartaNome: 'Sete de Ouros',
        desafio: 'Duas pessoas à sua direita bebem.',
    },
    {
        carta: './resources/images/cartas/7Espadas.webp',
        cartaNome: 'Sete de Espadas',
        desafio: 'Faça um brinde, e todos dão um shot.',
    },
    {
        carta: './resources/images/cartas/7Copas.webp',
        cartaNome: 'Sete de Copas',
        desafio:
            'Você fará o desafio pela próxima pessoa que escolher uma carta.',
    },
    {
        carta: './resources/images/cartas/7Paus.webp',
        cartaNome: 'Sete de Paus',
        desafio: 'Escolha algúem para beber com você.',
    },
    {
        carta: './resources/images/cartas/8Ouros.webp',
        cartaNome: 'Oito de Ouros',
        desafio: 'Salve uma pessoa. Todos os outros bebem.',
    },
    {
        carta: './resources/images/cartas/8Espadas.webp',
        cartaNome: 'Oito de Espadas',
        desafio:
            'Você dá dois shots. Pessoa á esquerda e à direita dão um cada.',
    },
    {
        carta: './resources/images/cartas/8Copas.webp',
        cartaNome: 'Oito de Copas',
        desafio: 'Pessoa à esquerda bebe.',
    },
    {
        carta: './resources/images/cartas/8Paus.webp',
        cartaNome: 'Oito de Paus',
        desafio: 'Um shot para os homens. Dois shots para as mulheres.',
    },
    {
        carta: './resources/images/cartas/9Ouros.webp',
        cartaNome: 'Nove de Ouros',
        desafio: 'Duas pessoas à sua esquerda bebem.',
    },
    {
        carta: './resources/images/cartas/9Espadas.webp',
        cartaNome: 'Nove de Espadas',
        desafio: 'Escolha três pessoas para dar dois shots cada.',
    },
    {
        carta: './resources/images/cartas/9Copas.webp',
        cartaNome: 'Nove de Copas',
        desafio:
            'Sirva todo mundo com um shot direto da garrafa, e finalize com um shot caprichado.',
    },
    {
        carta: './resources/images/cartas/9Paus.webp',
        cartaNome: 'Nove de Paus',
        desafio: 'Dê um shot direto da garrafa.',
    },
    {
        carta: './resources/images/cartas/10Ouros.webp',
        cartaNome: 'Dez de Ouros',
        desafio: 'Casais bebem. Se não houver nenhum casal, todos bebem',
    },
    {
        carta: './resources/images/cartas/10Espadas.webp',
        cartaNome: 'Dez de Espadas',
        desafio: 'Dê um shot, e a próxima pessoa escolhe duas cartas.',
    },
    {
        carta: './resources/images/cartas/10Copas.webp',
        cartaNome: 'Dez de Copas',
        desafio: 'Dois shots para os homens. Um shot para as mulheres.',
    },
    {
        carta: './resources/images/cartas/10Paus.webp',
        cartaNome: 'Dez de Paus',
        desafio: 'Solteiros bebem. Se não houver solteiros, todos bebem.',
    },
    {
        carta: './resources/images/cartas/jOuros.webp',
        cartaNome: 'Valete de Ouros',
        desafio: 'Pessoa à direita dá dois shots. Pessoa à esquerda dá um.',
    },
    {
        carta: './resources/images/cartas/jEspadas.webp',
        cartaNome: 'Valete de Espadas',
        desafio: 'Faça um brinde, e todos dão um shot. Você dá dois shots.',
    },
    {
        carta: './resources/images/cartas/jCopas.webp',
        cartaNome: 'Valete de Copas',
        desafio: 'Escolha duas pessoas para beber com você.',
    },
    {
        carta: './resources/images/cartas/jPaus.webp',
        cartaNome: 'Valete de Paus',
        desafio: 'Todos bebem, menos você.',
    },
    {
        carta: './resources/images/cartas/qOuros.webp',
        cartaNome: 'Dama de Ouros',
        desafio: 'Mulheres bebem. Se não houver mulheres, todos bebem.',
    },
    {
        carta: './resources/images/cartas/qEspadas.webp',
        cartaNome: 'Dama de Espadas',
        desafio: 'Se declare pra alguém, e vocês dois bebem.',
    },
    {
        carta: './resources/images/cartas/qCopas.webp',
        cartaNome: 'Dama de Copas',
        desafio:
            'Escolha uma mulher para beber. Se não houver mulheres, você bebe.',
    },
    {
        carta: './resources/images/cartas/qPaus.webp',
        cartaNome: 'Dama de Paus',
        desafio: 'Dê um shot, e escolha mais uma carta.',
    },
    {
        carta: './resources/images/cartas/kOuros.webp',
        cartaNome: 'Rei de Ouros',
        desafio:
            'Você dá um shot. Pessoa à esquerda e à direita dão dois shots cada.',
    },
    {
        carta: './resources/images/cartas/kEspadas.webp',
        cartaNome: 'Rei de Espadas',
        desafio:
            'Escolha um homem para beber. Se não houver homens, você bebe.',
    },
    {
        carta: './resources/images/cartas/kCopas.webp',
        cartaNome: 'Rei de Copas',
        desafio: 'Homens bebem. Se não houver homens, todas bebem.',
    },
    {
        carta: './resources/images/cartas/kPaus.webp',
        cartaNome: 'Rei de Paus',
        desafio: 'Casados bebem. Se não houver casados, todos bebem.',
    },
];

function randNumber() {
    const number = Math.floor(Math.random() * cartas.length);
    return number;
}

button.addEventListener('click', () => {
    const number = randNumber();
    carta.src = cartas[number].carta;
    carta.alt = cartas[number].cartaNome;
    cartaNome.innerHTML = cartas[number].cartaNome;
    desafio.innerHTML = cartas[number].desafio;
    button.style.pointerEvents = 'none';
    button.style.backgroundColor = 'gray';
    const oi = setInterval(() => {
        document.querySelector('.pop-up-bg').style.display = 'flex';
        clearInterval(oi);
    }, 1000);
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.pop-up-bg').style.display = 'none';
    button.style.pointerEvents = 'auto';
    button.style.backgroundColor = '';
});
