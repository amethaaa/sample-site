const buttonHeight = 50;
const buttonWidth = 100;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const video = document.getElementById('soulmate-video');
    const initialImage = document.getElementById('final-img');
    const text = document.getElementById('txt');

    noButton.addEventListener('mouseover', () => {
        noButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
        
    })

    yesButton.addEventListener('click', () => {
        video.style.display = 'inline';
        initialImage.style.display = 'none';
        noButton.style.display = 'none';
        text.innerHTML = 'Yaaaayyyyy!!!'
        yesButton.style.display = 'none';
        text.style.marginTop = '30px';
    })
})