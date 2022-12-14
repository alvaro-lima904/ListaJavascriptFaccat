function maior() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    if (valor1>valor2) {
        document.getElementById('resultado').innerText = "O maior valor é: "+valor1;
    } else if (valor1<valor2) {
        document.getElementById('resultado').innerText = "O maior valor é: "+valor2;
    } else{
        document.getElementById('resultado').innerText = "Ei, os dois valores precisam ser diferentes.."
    }
}