let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearAll() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function copyToClipboard() {
    display.select();
    document.execCommand('copy');
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key.match(/[0-9\+\-\*\/\(\)\.]/)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter') {
        calculate();
    }
});