function calcularDano(ataque, defesa) {
    if (ataque >= defesa) {
        return ataque - defesa
    } else {
        return 0
    }
}

const ataque = parseFloat(gets());
const defesa = parseFloat(gets());

const danoCausado = calcularDano(ataque, defesa);
print("O dano causado pelo ataque foi: " + danoCausado);