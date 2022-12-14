function valor() {
    let numero = parseInt(document.getElementById('numero01').value);

    if (numero > 0) {
        document.getElementById('resultado').innerText = "O número digitado é positivo";
    } else if (numero < 0) {
        document.getElementById('resultado').innerText = "O número digitado é negativo";
       
    } else {
        document.getElementById('resultado').innerText = "O número digitado é neutro";
    };
};