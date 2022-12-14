function ordenar() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    if (valor1>valor2) {
        document.getElementById('resultado').innerText = "Os valores em ordem crescente são: "+valor2+" e "+valor1;
    } else if (valor2>valor1) {
        
        document.getElementById('resultado').innerText = "Os valores em ordem crescente são: "+valor1+" e "+valor2;
    } else {
        document.getElementById('resultado').innerText = "Ei, não pode enviar valores iguais...."
    }
}