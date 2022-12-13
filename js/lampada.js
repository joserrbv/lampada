var lamp = window.document.getElementById('lampada')
function estaQuebrada () {
    return lamp.src.indexOf('lampquebrada') > -1
}
function Ligar() {
    if (!estaQuebrada()){
    lamp.src = 'lampacesa.png'}
}
function Desligar() {
    if (!estaQuebrada()){
    lamp.src = 'lampapagada.png'}
}
lamp.addEventListener('click', Quebrar)
function Quebrar() {
    lamp.src = 'lampquebrada.png'
}
