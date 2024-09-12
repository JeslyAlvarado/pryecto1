function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (result === Infinity) {
            throw new Error("División por cero");
        }
        display.value = result;
    } catch (error) {
        alert("Entrada no válida: " + error.message);
        clearDisplay();
    }
}
