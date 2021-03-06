// Model
let resultBoxInnerHTML = "";
let resultValue = 0;


// View
function updateView() {
    document.getElementById("app").innerHTML = `
    <div id="resultBox" class="calc-div resultBox" id="screen">${resultBoxInnerHTML}</div>

    <div class="calc-div firstInRow" onclick="addCharacter(7)">7</div>
    <div class="calc-div" onclick="addCharacter(8)">8</div>
    <div class="calc-div" onclick="addCharacter(9)">9</div>
    <div class="calc-div" onclick="addCharacter('÷')">÷</div>

    <div class="calc-div firstInRow" onclick="addCharacter(4)">4</div>
    <div class="calc-div" onclick="addCharacter(5)">5</div>
    <div class="calc-div" onclick="addCharacter(6)">6</div>
    <div class="calc-div" onclick="addCharacter('×')">×</div>

    <div class="calc-div firstInRow" onclick="addCharacter(1)">1</div>
    <div class="calc-div" onclick="addCharacter(2)">2</div>
    <div class="calc-div" onclick="addCharacter(3)">3</div>
    <div class="calc-div" onclick="addCharacter('-')">-</div>

    <div class="calc-div firstInRow" onclick="addCharacter(0)">0</div>
    <div class="calc-div" onclick="clearResult();">C</div>
    <div class="calc-div" onclick="calculate()">=</div>
    <div class="calc-div" onclick="addCharacter('+')">+</div>
    `;
}

// Controller
function addCharacter(x) {
    resultBoxInnerHTML += x;

    updateView();
}

function calculate() {
    var calculation = resultBoxInnerHTML
        .replace('×', '*')
        .replace('÷', '/');
        resultBoxInnerHTML = eval(calculation);

    updateView();
}

function clearResult() {
    resultBoxInnerHTML = '';

    updateView();
}

updateView();