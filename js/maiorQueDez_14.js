function verificar() {
    let valor = parseInt(document.getElementById('numero01').value);


    if (valor > 10) {
        document.getElementById('resultado').innerText = "O número digitado é maior que 10";
    } else {
        document.getElementById('resultado').innerText = "O número digitado não é maior que 10";
    }
}