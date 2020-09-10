//Make an object for the hours in the day
var workHours = {
    "9AM": "",
    "10AM": "",
    "11AM": "",
    "12PM": "",
    "1PM": "",
    "2PM": "",
    "3PM": "",
    "4PM": "",
    "5PM": "",
};

$(document).ready(function () {
    //retrieve items from local storage when the page loads


    //Add the date to the page using moments.js
    var time = moment().format('LT');
    console.log(time);
    
    displayDateDay();
    
    //function to display current date/day
    function displayDateDay() {
        var weekDay = moment().format("dddd");
        var date = moment().format("MMM Do YYYY");
        $("#currentDay").append(weekDay + ", " + date);
        console.log(weekDay + date);

    }

    //create a loop that will see the time and add the appropriate CSS class based on the time of day
    
});


// var key = "9am";
// var task = "This is an example note!";

// var timeBlocks = ["9am", "10am", "11am", "5pm"]

// for (var i=0; i < timeBlocks.length; i++) {
//     var task = localStorage.getItem(timeBlocks[i]);
//     // change text of relavent timeBlock to task here
// }

// //timeBlock: "9am" -> "5pm"
// //tawsk: any String
// function saveTask(timeBlock,task) {
//     localStorage.setItem(timeBlock, task);
// }
// You're setting the timeBlock back to local storage, so if one thing is changed everything else will stay but that one thing will change