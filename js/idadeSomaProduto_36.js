function maiorIdade() {
    let homem1 = parseInt(document.getElementById('numero01').value);
    let homem2 = parseInt(document.getElementById('numero02').value);
    let mulher1 = parseInt(document.getElementById('numero03').value);
    let mulher2 = parseInt(document.getElementById('numero04').value);


    let maiorIdadeHomem;
    let menorIdadeHomem;
    let maiorIdadeMulher;
    let menorIdadeMulher;
    if (homem1>homem2) {
        maiorIdadeHomem = homem1;
        menorIdadeHomem = homem2;
    } else if(homem2>homem1) {
        maiorIdadeHomem = homem2;
        menorIdadeHomem = homem1;
    }

    if (mulher1>mulher2) {
        maiorIdadeMulher = mulher1;
        menorIdadeMulher = mulher2;
    } else if(mulher2>mulher1) {
        maiorIdadeMulher = mulher2;
        menorIdadeMulher = mulher1;
    }

    let produto = menorIdadeHomem*maiorIdadeMulher;
    let soma = maiorIdadeHomem+menorIdadeMulher;

    document.getElementById('resultado1').innerText = "O produto do homem mais novo com a mulher mais velha é:"+produto;
    document.getElementById('resultado2').innerText = "A soma do homem mais velho com a mulher mais nova é:"+soma;

}