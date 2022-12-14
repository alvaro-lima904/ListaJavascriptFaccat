function preco() {
    let quantidade = parseInt(document.getElementById('numero01').value);
    let maca = 1.30

    if (quantidade > 12 ) {
        maca = 1.00
    }
    let valorTotal = maca*quantidade;
    document.getElementById('resultado').innerHTML = "O valor total a ser pago será $"+valorTotal;
}