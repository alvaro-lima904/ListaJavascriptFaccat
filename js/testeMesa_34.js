function mesa() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    let valor3  = (valor1*valor2) + 5;

    if (valor3<=0) {
        document.getElementById('resultado').innerText = "O resultado foi: "+valor3+" Respota A";
    } else if (valor3<=100) {
        document.getElementById('resultado').innerText = "O resultado foi: "+valor3+" Resposta B";
    } else {
        document.getElementById('resultado').innerText = "O resultado foi: "+valor3+" Resposta C";
    };
};