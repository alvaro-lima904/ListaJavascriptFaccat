function formar() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);

    if (valor1>valor2+valor3) {
        document.getElementById('resultado').innerText = "De acordo com os valores digitados, é possível formar um triângulo";
    } else if (valor2>valor1+valor3) {
        document.getElementById('resultado').innerText = "De acordo com os valores digitados, é possível formar um triângulo";
    } else if (valor3>valor1+valor2) {
        document.getElementById('resultado').innerText = "De acordo com os valores digitados, é possível formar um triângulo";
    } else {
        document.getElementById('resultado').innerText = "De acordo com os valores digitados, não é possível formar um triângulo";
    };
};