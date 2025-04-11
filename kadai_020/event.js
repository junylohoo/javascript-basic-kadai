const textElment = document.getElementById('text');
const buttonElement = document.getElementById('btn');


buttonElement.addEventListener('click', () => {
    
    textElment.textContent = 'ボタンをクリックしました';
});