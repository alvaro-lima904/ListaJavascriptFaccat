function salarioTotal() {
    let horasTrabalhadas = parseInt(document.getElementById('numero01').value);
    let salarioHora = parseInt(document.getElementById('numero02').value);

    let salario = salarioHora*horasTrabalhadas;
    if (horasTrabalhadas>40) {
        salario = salario+(salario*50/100);
    };
    document.getElementById('resultado').innerText = "O salário total no mês é: "+salario;
};