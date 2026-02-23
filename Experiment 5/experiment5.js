const button = document.getElementById("button1");
const bg = document.getElementsByTagName("body")
button.addEventListener('click', function() {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    bg.style.backgroundColor = 'black';
    

})