
function changeTitleColour() {
    
    const title = document.querySelector('h1');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    title.style.color = randomColor;
}
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColourButton');
    button.addEventListener('click', changeTitleColour);
});
