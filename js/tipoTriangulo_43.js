function tipo() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);
    
    if (valor1 < valor2+valor3 && valor2 < valor1+valor3 && valor3 < valor1+valor2) {
        if (valor1==valor2 && valor2==valor3) {
            document.getElementById('resultado').innerText = "Os valores digitados podem formar um triângulo equilatero";
        } else if (valor1==valor2 || valor2==valor3 || valor1==valor3)  {
            document.getElementById('resultado').innerText = "Os valores digitados podem formar um triângulo isóceles";
        }
        else {
            document.getElementById('resultado').innerText = "Os valores digitados podem formar um triângulo escaleno";
        }
    } else {
        document.getElementById('resultado').innerText = "Os valores digitados não podem formar um triângulo";
    };
};