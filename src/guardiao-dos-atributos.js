//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// TODO: Crie uma Função 'VerificarAtributo' para verificar se o valor do atributo está dentro do intervalo especificado:
function VerificarAtributo(atributo, valorMinimo, valorMaximo, valorAtributo) {
    // TODO: Implemente a função VerificarAtributo, para verifica se o valor do atributo está entre o mínimo e o máximo:
    if (valorAtributo > valorMinimo && valorAtributo < valorMaximo) {
        return true
    } else {
        return false
    }
}

// Obtemos os valores do atributo, mínimo, máximo e valor do atributo através das entradas do usuário
const atributo = gets();
const valorMinimo = parseInt(gets());
const valorMaximo = parseInt(gets());
const valorAtributo = parseInt(gets());

// TODO: Verifique se o valor do atributo está dentro do intervalo especificado e imprima o resultado:
if (VerificarAtributo(atributo, valorMinimo, valorMaximo, valorAtributo) == true) {
    print("O valor do atributo está dentro do intervalo especificado")
} else {
    print("O valor do atributo está fora do intervalo especificado")
}