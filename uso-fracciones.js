function toggleDetail(id) {
    const detailElement = document.getElementById(id);
    if (detailElement.style.display === 'none' || detailElement.style.display === '') {
        detailElement.style.display = 'block';
    } else {
        detailElement.style.display = 'none';
    }
}

// División de Pan
const breadCanvas = document.getElementById('breadCanvas');
const breadCtx = breadCanvas.getContext('2d');
breadCtx.fillStyle = '#f4a460'; // Color de pan
breadCtx.beginPath();
breadCtx.arc(200, 200, 180, 0, 2 * Math.PI);
breadCtx.fill();

function drawBreadFractions(fractions) {
    breadCtx.clearRect(0, 0, breadCanvas.width, breadCanvas.height);
    breadCtx.fillStyle = '#f4a460';
    breadCtx.beginPath();
    breadCtx.arc(200, 200, 180, 0, 2 * Math.PI);
    breadCtx.fill();

    let startAngle = 0;
    fractions.forEach(fraction => {
        const endAngle = startAngle + (2 * Math.PI * fraction);
        breadCtx.beginPath();
        breadCtx.moveTo(200, 200);
        breadCtx.arc(200, 200, 180, startAngle, endAngle);
        breadCtx.closePath();
        breadCtx.fillStyle = getRandomColor();
        breadCtx.fill();
        startAngle = endAngle;
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Ejemplo de fracciones para el pan: 1/2, 1/4, 1/8
drawBreadFractions([0.5, 0.25, 0.125, 0.125]);

// División de Tierra
const landCanvas = document.getElementById('landCanvas');
const landCtx = landCanvas.getContext('2d');

function drawLandFractions(fractions) {
    landCtx.clearRect(0, 0, landCanvas.width, landCanvas.height);
    let startX = 0;
    fractions.forEach(fraction => {
        const width = landCanvas.width * fraction;
        landCtx.fillStyle = getRandomColor();
        landCtx.fillRect(startX, 0, width, landCanvas.height);
        startX += width;
    });
}

// Ejemplo de fracciones para la tierra: 1/2, 1/3, 1/6
drawLandFractions([0.5, 0.333, 0.167]);