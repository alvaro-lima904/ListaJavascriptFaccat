function positOuNegat() {
    let valor = parseInt(document.getElementById('numero01').value);
    
    if (valor > -1) {
        document.getElementById('resultado').innerHTML = "O número digitado é positivo";
    } else {
        document.getElementById('resultado').innerHTML = "O número digitado é negativo";
    };
};