function estoque() {
    let produto = document.getElementById('numero01').value;
    let qAtual = parseInt(document.getElementById('numero02').value);
    let qMinima = parseInt(document.getElementById('numero03').value);
    let qMaxima = parseInt(document.getElementById('numero04').value);

    let qMedia = (qMinima = qMaxima)/2;

    if (qAtual >= qMedia) {
        document.getElementById('resultado').innerText = "Não efetuar compra do produto: "+produto;
    } else {
        document.getElementById('resultado').innerText = "Efetuar a compra do produto: "+produto;
    };
};