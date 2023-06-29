function addToResult(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    let answer = eval(result);
    document.getElementById('result').value = answer;
}

function clearResult() {
    document.getElementById('result').value = '';
}