function duracao() {
    let inicio = parseInt(document.getElementById('numero01').value);
    let termino = parseInt(document.getElementById('numero02').value);

    let horas = termino-inicio;

    if (horas < 0) {
        horas = horas + 24;
        document.getElementById('resultado').innerText = "A partida durou: "+horas+" horas";
    } 
    document.getElementById('resultado').innerText = "A partida durou: "+horas+" horas";
};