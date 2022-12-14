function maior() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);

    if ((valor1>valor2) && (valor1>valor3)) {
        document.getElementById('resultado').innerText = "O maior valor dos 3 informados é: "+valor1;
    } else if ((valor2>valor1) && (valor2>valor3)){
        document.getElementById('resultado').innerText = "O maior valor dos 3 informados é: "+valor2;
    } else {
        document.getElementById('resultado').innerText = "O maior valor dos 3 informados é: "+valor3;
    };
};