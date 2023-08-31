let displayValue = ''

function appendToDisplay(value){
    displayValue += value
    document.getElementById('display').value = displayValue
}

function limpaDisplay(){
    displayValue = ''
    document.getElementById('display').value = displayValue
}

function clearDisplay(){
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue
}

function calculate(){
    try {

        const result = eval(displayValue)
        document.getElementById('display').value = result
        displayValue = result.toString()
        
    } catch (error) {
        console.log('.......', error)
        document.getElementById('display').value = 'Erro'
    }
}
function calculatePercentage() {
    try {
        const result = eval(displayValue) / 100;
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        console.log(error);
        document.getElementById('display').value = 'Erro';
    }
}
function toggleSign() {
    if (displayValue !== '') {
        if (displayValue[0] === '-') {
            displayValue = displayValue.slice(1);
        } else {
            displayValue = '-' + displayValue;
        }
        document.getElementById('display').value = displayValue;
    }
}








