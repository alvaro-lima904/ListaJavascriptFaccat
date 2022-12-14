function preco() {
    let qtdMorango = parseInt(document.getElementById('numero01').value);
    let qtdMaca = parseInt(document.getElementById('numero02').value);

    let morango = 2.50;
    let maca = 1.80;
    let precoMorango = qtdMorango*morango;
    let precoMaca = qtdMaca*maca;

    if (qtdMorango>5) {
        morango = 2.20;
    }
    if (qtdMaca > 5) {
        maca = 1.50;
    }

    let precoFinal = precoMorango+precoMaca;

    document.getElementById('resultado').innerText = "O valor total a ser pago é: $"+precoFinal.toFixed(2);
}