var restart = document.querySelector("#btn");
 var squres = document.querySelectorAll("td");

function clearBoard() {
    for(var i=0 ; i < squres.length ; i++) {
        squres[i].textContent = "";
        
    }
}
restart.addEventListener("click", clearBoard);

function changeMarker() {
    
    if(this.textContent === "" ) {
        this.textContent = "X"
    }else if (this.textContent === "X") {
        this.textContent = "O"
    }else {
        this.textContent = ""
    }
}
for( var i = 0; i < squres.length ; i++) {
    squres[i].addEventListener("click", changeMarker);
}