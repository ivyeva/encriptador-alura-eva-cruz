
document.getElementById('human-text').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-z]/g, '');
});

function encriptar() {

    let humanText = document.getElementById('human-text').value;

    let convertedText = humanText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");


    document.getElementById('processed-text-content').textContent = convertedText;

    document.getElementById('human-text').value = '';
}

function desencriptar() {

    let aluraText = document.getElementById('processed-text-content').textContent;

    let desconvertedText = aluraText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('processed-text-content').textContent = desconvertedText;

    document.getElementById('human-text').value = '';
}

 function copiarPortapapeles() {
 
    let processedText = document.getElementById('processed-text-content').textContent;

    navigator.clipboard.writeText(processedText).then(function() {
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
}