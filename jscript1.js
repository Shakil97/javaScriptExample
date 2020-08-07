var header = document.querySelector("h1");
header.style.color = '#3733a6';

function getRandomColor() {
    var letters = "012346789ABCDEFG";
    var color = "#";
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeHeaderColor() {
    colorInput = getRandomColor();
    header.style.color = colorInput;
}
setInterval("changeHeaderColor()",400);

var headOne = document.querySelector ("#one");
var headTwo = document.querySelector ("#two");
var headThree = document.querySelector ("#three");

headOne.addEventListener('mouseover',function(){
    headOne.textContent = "Mouse currently over";
    headOne.style.color = "#3733a6"
})
headOne.addEventListener('mouseout',function(){
    headOne.textContent = "HOVER OVER ME";
    headOne.style.color = "#000000"
})

headTwo.addEventListener('click',function(){
    headTwo.textContent = "CLICKED ME"
    headTwo.style.color = "#3733a6";
})
headThree.addEventListener('dblclick',function(){
    headThree.textContent = "I WAS DOUBLR CLICKED ME"
    headThree.style.color = "#3733a6";
})

