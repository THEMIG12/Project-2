const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsOfYearin3char = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = monthsOfYear[currentDate.getMonth()];
const dayOfMonth = currentDate.getDate();
const year = currentDate.getFullYear();

const fullDay = `${dayOfWeek}, ${dayOfMonth} ${month}, ${year}`;

function dateis() {
    document.getElementById("date").innerHTML = fullDay;
}

setInterval(function () {

    // Get today's date and time
    var now = new Date();
    var H = now.getHours(), M = now.getMinutes(), S = now.getSeconds();
    if (H < 10) { H = "0" + H };
    if (M < 10) { M = "0" + M };
    if (S < 10) { S = "0" + S };
    document.getElementById("timeNow").innerHTML = H + ":" + M + ":" + S ;
}, 1);