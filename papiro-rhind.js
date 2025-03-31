function showText(textId) {
    const texts = document.querySelectorAll('.text-content');
    texts.forEach(text => {
        text.style.display = 'none';
    });

    const selectedText = document.getElementById(textId);
    if (selectedText) {
        selectedText.style.display = 'block';
    }
}