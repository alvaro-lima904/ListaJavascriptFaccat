function descricao() {
    let nome = document.getElementById('numero01').value;
    let quantidadeAdquirida = parseInt(document.getElementById('numero02').value);
    let precoUnitario = parseInt(document.getElementById('numero03').value);
   
    let total = quantidadeAdquirida*precoUnitario;
    let desconto;
    if (quantidadeAdquirida <= 5) {
        desconto = total*2/100;
        total = total-desconto;
        document.getElementById('resultado').innerText = "O valor total a ser pago do produto "+nome+" é: $"+total;
    } else if (quantidadeAdquirida>5 && quantidadeAdquirida<=10) {
        desconto = total*3/100;
        total = total-desconto;
        document.getElementById('resultado').innerText = "O valor total a ser pago do produto "+nome+" é: $"+total;
    } else {
        desconto = total*5/100;
        total = total-desconto;
        document.getElementById('resultado').innerText = "O valor total a ser pago do produto "+nome+" é: $"+total;
    }

}