function convertToHieroglyphs() {
    const number = document.getElementById('decimalNumber').value;
    const hieroglyphsResult = document.getElementById('hieroglyphsResult');
    hieroglyphsResult.innerHTML = '';

    if (number === '') {
        alert('Por favor, ingrese un número.');
        return;
    }

    const hieroglyphs = {
        1: '𓏺',
        10: '𓎆',
        100: '𓍢',
        1000: '𓂭',
        10000: '𓆼',
        100000: '𓂭𓆼',
        1000000: '𓁨'
    };

    let remaining = number;
    const parts = [];

    Object.keys(hieroglyphs).reverse().forEach(value => {
        const count = Math.floor(remaining / value);
        if (count > 0) {
            parts.push(hieroglyphs[value].repeat(count));
            remaining -= count * value;
        }
    });

    hieroglyphsResult.innerHTML = parts.join(' ');
}