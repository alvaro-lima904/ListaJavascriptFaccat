function partida() {
    let time1 = document.getElementById('numero01').value;
    let time2 = document.getElementById('numero02').value;

    let gols1 = parseInt(document.getElementById('numero03').value);
    let gols2 = parseInt(document.getElementById('numero04').value);

    if (gols1>gols2) {
        document.getElementById('resultado').innerText = "O time: "+time1+" foi vencedor";
    } else if (gols2>gols1) {
        document.getElementById('resultado').innerText = "O time: "+time2+" foi vencedor";
    } else {
        document.getElementById('resultado').innerText = "EMPATE";
    }
}