window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'es-ES';
recognition.interimResults = false;

recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        .toLowerCase();

    // Ocultar todos los cuadros de información
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => box.style.display = 'none');

    if (transcript.includes('reloj')) {
        document.getElementById('infoBox1').style.display = 'block';
    } else if (transcript.includes('calendario')) {
        document.getElementById('infoBox2').style.display = 'block';
    } else if (transcript.includes('medida')) {
        document.getElementById('infoBox3').style.display = 'block';
    } else if (transcript.includes('edwin')) {
        document.getElementById('infoBox4').style.display = 'block';
    }
});

recognition.addEventListener('end', recognition.start);
recognition.start();