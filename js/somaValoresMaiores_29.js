function somaMaiores() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);

    let soma;
    if ((valor1>=valor2) && (valor2>valor3)) {
        soma = valor1+valor2;
        document.getElementById('resultado').innerText = "A soma dos 2 maiores valores é: "+soma;
    } else if ((valor1>=valor3) && (valor3>valor2)) {
        soma = valor1+valor3;
        document.getElementById('resultado').innerText = "A soma dos 2 maiores valores é: "+soma;
    } else if ((valor2>=valor1) && (valor1>valor3)) {
        soma = valor2+valor1;
        document.getElementById('resultado').innerText = "A soma dos 2 maiores valores é: "+soma;
    } else if ((valor2>=valor3) && (valor3>valor1)) {
        soma = valor2+valor3;
        document.getElementById('resultado').innerText = "A soma dos 2 maiores valores é: "+soma;
    } else if ((valor3>=valor1) && (valor1>valor2)) {
        soma = valor3+valor1;
        document.getElementById('resultado').innerText = "A soma dos 2 maiores valores é: "+soma;
    } else{
        soma = valor3+valor2;
        document.getElementById('resultado').innerText = "A soma dos 2 maiores valores é: "+soma;
    }
}