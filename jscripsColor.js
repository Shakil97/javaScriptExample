var Myheader = Document.querySelector("h1");
Myheader.style.color = 'red'
function getRandomColor(){
    var letters= "012346789ABCDEF"
    var color= "#"
    for(var i=0; i<6; i++){
        color +=letters[Math.floor(Math.random)*16];
        
    }
    return color;
}
function changeHeaderColor(){
    colorInput= getRandomColor()
    Myheader.style.color= colorInput();
}
setInterval("changeHeaderColor()",400);