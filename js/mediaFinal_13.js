function calcular() {
    let nome = document.getElementById('numero01').value;
    let nota1 = parseInt(document.getElementById('numero02').value);
    let nota2 = parseInt(document.getElementById('numero03').value);
    let nota3 = parseInt(document.getElementById('numero04').value);

    let media = ((nota1*2)+(nota2*3)+(nota3*5))/10;

    document.getElementById('resultado').innerText = "A media do "+nome+" é "+media;
}