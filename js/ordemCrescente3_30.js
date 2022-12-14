function crescente() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);

    if ((valor1>valor2) && (valor2>valor3)) {
        document.getElementById('resultado').innerText = "A ordem crescente dos valores digitados é "+valor3+" "+valor2+" "+valor1;
    } else if ((valor1>valor3) && (valor3>valor2)) {
        document.getElementById('resultado').innerText = "A ordem crescente dos valores digitados é "+valor2+" "+valor3+" "+valor1;
    } else if ((valor2>valor1) && (valor1>valor3)) {
        document.getElementById('resultado').innerText = "A ordem crescente dos valores digitados é "+valor3+" "+valor1+" "+valor2;
    } else if ((valor2>valor3) && (valor3>valor1)) {
        document.getElementById('resultado').innerText = "A ordem crescente dos valores digitados é "+valor1+" "+valor3+" "+valor2;
    } else if ((valor3>valor1) && (valor1>valor2)) {
        document.getElementById('resultado').innerText = "A ordem crescente dos valores digitados é "+valor2+" "+valor1+" "+valor3;
    } else{
        document.getElementById('resultado').innerText = "A ordem crescente dos valores digitados é "+valor1+" "+valor2+" "+valor3;
    }
}