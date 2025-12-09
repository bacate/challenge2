const jogadores = [];

//TODO: Solicite a Entrada dos Nomes dos Jogadores
for (let i = 0; i < 5; i++) {
    jogadores.push(gets())
}

const index = parseInt(jogadores[5]);
jogadores[index - 1] = jogadores[6];

//TODO: Solicite a Saída dos Nomes dos Jogadores:
const indice = gets();
const novoJogador = gets();
if (indice - 1 >= 0 && indice - 1 < jogadores.length) {
    jogadores[indice - 1] = novoJogador;
}

//exibindo jogadores
jogadores.forEach((jogador, index) => {
    print(`${index + 1}. ${jogador}`);
});