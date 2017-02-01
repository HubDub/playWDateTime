//playing with date/time in JS

let calculateTotalDateTime = function () {
  document.getElementById("totalDateTime").innerHTML = date1;

  let mil = date1.getTime();
  document.getElementById("mil").innerHTML = mil;
}

let calculateYearMonth = function() {
  let year = date1.getFullYear();
  document.getElementById("year").innerHTML = year;

  let month = date1.getMonth();
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("month").innerHTML = monthNames[month];
}

let calculateDayNum = function () {
  let dayDate = date1.getDate();
  var dateOutput = document.getElementById("date");
  if (dayDate === 1 || dayDate === 21 || dayDate ===31) {
    dateOutput.innerHTML = "The was the " + dayDate + "st of the Month";

  } else if (dayDate === 2 || dayDate === 22) {
    dateOutput.innerHTML = "The was the " + dayDate + "nd of the Month";

  } else if (dayDate === 3 || dayDate === 23) {
    dateOutput.innerHTML = "The was the " + dayDate + "rd of the Month";

  } else {
    dateOutput.innerHTML = "The was the " + dayDate + "th of the Month";
  }
}

let calculateDay = function() {
  let sameDay = date1.getDay();
  let dayOfWeek = document.getElementById("dayOfWeek");
  switch(sameDay) {
    case 0:
        dayOfWeek.innerHTML = "It was Sunday"
        break;
    case 1:
        dayOfWeek.innerHTML = "It was Monday"
        break;
    case 2:
        dayOfWeek.innerHTML = "It was Tuesday"
        break;
    case 3:
        dayOfWeek.innerHTML = "It was Wednesday"
        break;
    case 4:
        dayOfWeek.innerHTML = "It was Thursday"
        break;
    case 5:
        dayOfWeek.innerHTML = "It was Friday"
        break;
    case 6:
        dayOfWeek.innerHTML = "It was Saturday"
        break;
  }
}

let calculateTime = function() {
  let hours = date1.getHours();
  let minutes = date1.getMinutes();
  if (hours > 12) {
    hours = hours - 12;
  }
  document.getElementById("time").innerHTML = hours + ":" + minutes;
}

let date1 = new Date();
calculateTotalDateTime();
calculateYearMonth();
calculateDayNum();
calculateDay();
calculateTime();