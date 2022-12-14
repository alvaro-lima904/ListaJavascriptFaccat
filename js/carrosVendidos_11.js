function valorTotal() {
    let valorFixo = parseInt(document.getElementById('numero01').value);
    let totalVendas = parseInt(document.getElementById('numero02').value);
    let carrosVendidos = parseInt(document.getElementById('numero03').value);
    let RecebePorCarro = parseInt(document.getElementById('numero04').value);

    let comissao = carrosVendidos*2/100;
    let percVendas = totalVendas*5/100;
    let salarioFinal = valorFixo+comissao+percVendas;

    document.getElementById('resultado').innerHTML = "O salario final que irá receber é: "+salarioFinal;
}