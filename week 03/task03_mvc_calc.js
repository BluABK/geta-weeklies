var resultBox = document.getElementById('resultBox');

function addCharacter(x) {
    resultBox.innerHTML += x;
}

function calculate() {
    var calculation = resultBox
        .innerHTML
        .replace('×', '*')
        .replace('÷', '/');
    resultBox.innerHTML = eval(calculation);
}
function clearResult() {
    resultBox.innerHTML = '';
}