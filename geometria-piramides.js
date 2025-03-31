const canvas = document.getElementById('pyramidCanvas');
const ctx = canvas.getContext('2d');

let points = [
    { x: 150, y: 350 },
    { x: 450, y: 350 },
    { x: 300, y: 50 }
];

let selectedPoint = null;

canvas.addEventListener('mousedown', (e) => {
    const mousePos = getMousePos(canvas, e);
    selectedPoint = points.find(point => isPointInCircle(mousePos, point, 10));
});

canvas.addEventListener('mouseup', () => {
    selectedPoint = null;
});

canvas.addEventListener('mousemove', (e) => {
    if (selectedPoint) {
        const mousePos = getMousePos(canvas, e);
        selectedPoint.x = mousePos.x;
        selectedPoint.y = mousePos.y;
        draw();
    }
});

function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function isPointInCircle(point, circle, radius) {
    const dx = point.x - circle.x;
    const dy = point.y - circle.y;
    return dx * dx + dy * dy <= radius * radius;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the base of the pyramid
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.closePath();
    ctx.stroke();

    // Draw points
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffd700';
        ctx.fill();
        ctx.stroke();
    });

    // Calculate and display angles
    const angles = calculateAngles(points);
    displayAngles(angles);
}

function calculateAngles(points) {
    const [a, b, c] = points;

    const ab = Math.hypot(b.x - a.x, b.y - a.y);
    const bc = Math.hypot(c.x - b.x, c.y - b.y);
    const ca = Math.hypot(a.x - c.x, a.y - c.y);

    const angleA = Math.acos((ab * ab + ca * ca - bc * bc) / (2 * ab * ca)) * (180 / Math.PI);
    const angleB = Math.acos((ab * ab + bc * bc - ca * ca) / (2 * ab * bc)) * (180 / Math.PI);
    const angleC = Math.acos((bc * bc + ca * ca - ab * ab) / (2 * bc * ca)) * (180 / Math.PI);

    return [angleA, angleB, angleC];
}

function displayAngles(angles) {
    const [angleA, angleB, angleC] = angles;

    ctx.font = '16px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(`Ángulo A: ${angleA.toFixed(2)}°`, points[0].x + 15, points[0].y);
    ctx.fillText(`Ángulo B: ${angleB.toFixed(2)}°`, points[1].x - 75, points[1].y);
    ctx.fillText(`Ángulo C: ${angleC.toFixed(2)}°`, points[2].x, points[2].y - 15);
}

draw();