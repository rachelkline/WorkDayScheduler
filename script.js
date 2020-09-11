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
    if (!localStorage.getItem('workHours')) {
        updateCalendar(workHours);
    } else {
        updateCalendar(JSON.parse(localStorage.getItem('workHours')));
    }
});
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

//for loop to determine what time blocks get what classes
var hourProgress = 1;
for (var property in workHours) {
    var userInput = "#text-entry" + hourProgress;
    $(userInput).text(workHours[property]);
    var time = "#time" + hourProgress;
    var presentHour = moment().hour();
    var timeValue = $(time).text();
    var timePNumbers = hourFromHourValue(timeValue);
    if (timePNumbers < presentHour) {
        $(userInput).addClass("past");
    } else if (timePNumbers > presentHour) {
        $(userInput).addClass("future");
    } else {
        $(userInput).addClass("present");
    }
    hourProgress++;
}

$("button").click(function () {
    value = $(this).siblings("textarea").val();
    hourValue = $(this).siblings("div").text();

    saveUserInput(hourValue, value);
})

function hourFromHourValue(hourValue) {
    switch (hourValue) {
        case "9AM": return 9;
        case "10AM": return 10;
        case "11AM": return 11;
        case "12PM": return 12;
        case "1PM": return 13;
        case "2PM": return 14;
        case "3PM": return 15;
        case "4PM": return 16;
        case "5PM": return 17;
    }
}


function loadDataset() {
    result = localStorage.getItem("workHours")
    return (result ? result : workHours);
}

function initializeLS() {
    localStorage.setItem("workHours", JSON.stringify(workHours));
}

function saveToLS(dayObj) {
    localStorage.setItem('workHours', JSON.stringify(dayObj));
}

function saveUserInput(hourValue, val) {
    if (!localStorage.getItem("workHours")) {
        initializeLS();
    }


    var workDay = JSON.parse(localStorage.getItem("workHours"));
    workDay[hourValue] = val

    saveToLS(workDay);

}

function updateCalendar(dayObject) {
    $(".calendar-row").each(function (index) {
        var res = $(this).children("div");
        $(this).children("textarea").text(dayObject[res.text()]);
    })
}




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