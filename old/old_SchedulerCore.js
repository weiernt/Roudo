var date = 21;
var eventDescription;
var entryID;

function initCalendarGrid() {
    //refactor
}

function getDate(){
    //gets user I/O and assigns to global var
}

function displayDate(entryID){
    //change CSS to highlight correct ID
}

function getDescription(entryID){
    //gets user I/O and assigns to global variable
    console.log("reached getDescription");
    eventDescription = document.getElementById('description').nodeValue;
    date = document.getElementById('dateSelect').nodeValue;
    console.log(date);
    //write the description to the DOM
    (function () {
        document.getElementById(date).innerHTML = eventDescription;
        console.log("reached innerfunc ");

    })
}