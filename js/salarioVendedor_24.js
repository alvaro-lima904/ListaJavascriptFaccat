function salario() {
    let sFixo = parseInt(document.getElementById('numero01').value);
    let valorVendas = parseInt(document.getElementById('numero02').value);

    let comissao;

    if (valorVendas > 1500) {
        comissao = valorVendas*5/100;
    } else{
        comissao = valorVendas*3/100;
    };

    let total = sFixo+comissao;

    document.getElementById('resultado').innerText = "O salário total que irá receber é: "+total;
}