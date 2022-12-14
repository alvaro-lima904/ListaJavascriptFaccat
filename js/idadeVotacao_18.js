function idade() {
    let Atual = parseInt(document.getElementById('numero01').value);
    let Nascimento = parseInt(document.getElementById('numero02').value);

    let idade = Atual - Nascimento;

    if (idade <= 17) {
        document.getElementById('resultado').innerText = "Sua idade é: "+idade+" anos, você não pode votar";
    } else{
        document.getElementById('resultado').innerText = "Sua idade é: "+idade+" anos, você ja pode votar";
    };
};