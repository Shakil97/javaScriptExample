var roster = []


//ADD FUNCTION
function addName() {

	var newName = prompt("what name would you like to add?")
	roster.push(newName)
}

//REMOVE FUNCTION
function remove() {
	var remName = promt("what name would you like to remove?")
    var index = roster.indexOf(remName);
    roster.splice(index,1)
}
//DISPLAY FUNCTION
function display() {
    
    console.log(roster);
}

//CHOOSE FUNCTION
var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";

if (start ==='y') {
	while( request !== "quit"){
		request = prompt("Please select an Action : add,remove,display, or quit")

		if (request === 'add') {
			addName();
		}else if (request === 'display') {
			display();
		}else if (request === 'remove') {
			remove();
		}else{
			alert("not recognized ")
		}
	}
}

alert("Thanks for using web app, please refresh to start over!");