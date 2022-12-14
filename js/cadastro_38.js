function cadastrar() {
    let cadastro = 1234;
    let senha = 9999;

    let usuario = parseInt(document.getElementById('numero01').value);
    let password = parseInt(document.getElementById('numero02').value);

    if (usuario != cadastro) {
        document.getElementById('resultado1').innerText = "Usuário inválido!";
    }

    if (senha != password) {
        document.getElementById('resultado2').innerHTML = "Senha inválida!";
    }

    if (usuario == cadastro && senha == password) {
        document.getElementById('resultado1').innerText = "Usuário logado com sucesso!";
        document.getElementById('resultado2').innerText = "";
    }
}