function desconto() {
    let litrosComprados = parseInt(document.getElementById('numero01').value);
    let tipoC = document.getElementById('numero02').value;

    let alcool = 2.90;
    let gasolina = 3.30;  
    let precoAlcool = litrosComprados*alcool;
    let precoGasolina = litrosComprados*gasolina;
    let precoFinal;


    if ((tipoC == "alcool") || (tipoC == "Alcool")) {
        if (litrosComprados <= 20) {
            precoFinal = precoAlcool-(litrosComprados*alcool)*3/100;
            document.getElementById('resultado').innerText = "O preço final a ser pago é: "+ precoFinal.toFixed(3);
        } else if (litrosComprados > 20) {
            precoFinal = precoAlcool-(litrosComprados*alcool)*5/100;
            document.getElementById('resultado').innerText = "O preço final a ser pago é: "+ precoFinal.toFixed(3);
        }
    } else {
        if (litrosComprados <= 20) {
            precoFinal = precoGasolina-(litrosComprados*gasolina)*4/100;
            document.getElementById('resultado').innerText = "O preço final a ser pago é: "+ precoFinal.toFixed(3);
        } else if (litrosComprados > 20) {
            precoFinal = precoGasolina-(litrosComprados*gasolina)*6/100;
            document.getElementById('resultado').innerText = "O preço final a ser pago é: "+ precoFinal.toFixed(3);
        }
    }

}