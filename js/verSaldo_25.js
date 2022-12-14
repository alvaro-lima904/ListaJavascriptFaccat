function Saldo() {
    let numeroConta = document.getElementById('numero01').value;
    let saldo = parseInt(document.getElementById('numero02').value);
    let debito = parseInt(document.getElementById('numero03').value);
    let credito = parseInt(document.getElementById('numero04').value);

    let saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        document.getElementById('resultado').innerText = "Seu saldo atual é: "+saldoAtual+", logo, seu saldo é positivo"
    } else {
        document.getElementById('resultado').innerText = "Seu saldo atual é: "+saldoAtual+", logo, seu saldo é negativo"
    };
};