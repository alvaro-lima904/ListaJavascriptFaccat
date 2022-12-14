function media() {
    let nota1 = parseInt(document.getElementById('numero01').value);
    let nota2 = parseInt(document.getElementById('numero02').value);
    let nota3 = parseInt(document.getElementById('numero03').value);
    let mediaExer = parseInt(document.getElementById('numero04').value);


    let media = (nota1+nota2*2+nota3*3+mediaExer)/7;

    if (media >= 9) {
        document.getElementById('resultado').innerText = "Este aluno recebeu um A";
    } else if (media >= 7.5 && media < 9) {
        document.getElementById('resultado').innerText = "Este aluno recebeu um B";
    } else if (media >= 6 && media < 7.5) {
        document.getElementById('resultado').innerText = "Este aluno recebeu um C";
    } else if (media < 6) {
        document.getElementById('resultado').innerText = "Este aluno recebeu um D";
    }
}