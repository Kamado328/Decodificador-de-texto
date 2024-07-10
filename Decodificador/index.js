function decodificar() {
    var textoCodificado = document.getElementById("textoCodificado").value;
    var textoDecodificado = textoCodificado.split('').reverse().join('');
    document.getElementById("textoDecodificado").value = textoDecodificado;
}
