function qualificado() {
    let nome = document.getElementById('numero01').value;
    let idade = parseInt(document.getElementById('numero02').value);
    let anosTrabalho = parseInt(document.getElementById('numero03').value);

    if (idade >= 60 && anosTrabalho >= 25) {
        document.getElementById('resultado').innerText = "O funcionario "+nome+" pode se aposentar"
    } else {
        document.getElementById('resultado').innerText = "O funcionario "+nome+" não pode se aposentar"
    }
}