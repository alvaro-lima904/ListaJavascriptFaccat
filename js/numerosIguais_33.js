function iguais() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    if (valor1>valor2) {
        document.getElementById('resultado').innerHTML = "O primeiro valor é maior";
    } else if (valor2>valor1) {
        document.getElementById('resultado').innerText = "O segundo valor é maior";
    } else {
        document.getElementById('resultado').innerText = "Os valores são iguais";
    }
}