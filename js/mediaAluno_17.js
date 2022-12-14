function media() {
    let nome = document.getElementById('numero01').value;
    let nota1 = parseInt(document.getElementById('numero02').value);
    let nota2 = parseInt(document.getElementById('numero03').value);

    let media = (nota1+nota2)/2;

    if (media > 6) {
        document.getElementById('resultado').innerText = "O aluno "+nome+" foi aprovado";
    } else {
        document.getElementById('resultado').innerText = "O aluno "+nome+" não foi aprovado";
    }

    
}