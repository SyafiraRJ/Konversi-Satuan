
function convertUnit(type) {
    let inputValue;
    let resultElement;

    switch (type) {
        case 'jarak':
            inputValue = parseFloat(document.getElementById('inputValue').value);
            resultElement = document.getElementById('result');
            break;
        case 'berat':
            inputValue = parseFloat(document.getElementById('inputValueBerat').value);
            resultElement = document.getElementById('resultBerat');
            break;
        case 'volume':
            inputValue = parseFloat(document.getElementById('inputValueVolume').value);
            resultElement = document.getElementById('resultVolume');
            break;
        default:
            alert('Invalid type');
            return;
    }

    if (isNaN(inputValue)) {
        alert("Masukkan nilai yang valid.");
        return;
    }

    let unitType;
    switch (type) {
        case 'jarak':
            unitType = document.getElementById('jarakType').value;
            break;
        case 'berat':
            unitType = document.getElementById('beratType').value;
            break;
        case 'volume':
            unitType = document.getElementById('volumeType').value;
            break;
    }

    let result;
    switch (unitType) {
        case 'km':
            result = `
                ${inputValue} Kilometer <br>
                ${inputValue * 1000} Meter <br>
                ${inputValue * 100000} Sentimeter <br>`;
            break;
        case 'm':
            result = `
                ${inputValue} Meter <br>
                ${inputValue / 1000} Kilometer <br>
                ${inputValue * 100} Sentimeter <br>`;
            break;
        case 'cm':
            result = `
                ${inputValue} Sentimeter <br>
                ${inputValue / 100000} Kilometer <br>
                ${inputValue * 100} Meter <br>`;
            break;
        case 'kg':
            result = `
                ${inputValue} Kilogram <br>
                ${inputValue * 1000} Gram <br>
                ${inputValue / 1000} Ton <br>`;
            break;
        case 'g':
            result = `
                ${inputValue} Gram <br>
                ${inputValue / 1000} Kilogram <br>
                ${inputValue / 1000000} Ton <br>`;
            break;
        case 'ton':
            result = `
                ${inputValue} Ton <br>
                ${inputValue * 1000} Kilogram <br>
                ${inputValue * 1000000} Gram <br>`;
            break;
        case 'l':
            result = `
                ${inputValue} Liter <br>
                ${inputValue * 1000} Mililiter <br>`;
            break;
        case 'ml':
            result = `
                ${inputValue} Mililiter <br>
                ${inputValue / 1000} Liter <br>`;
            break;
        default:
            alert('Invalid unit type');
            return;
    }

    resultElement.innerHTML = result;
}