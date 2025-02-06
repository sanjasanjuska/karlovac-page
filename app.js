var copyright = document.querySelector("[data-year");
var datum = document.querySelector("[current-date]");
var vrijeme = document.querySelector("[current-time]");
const button = document.querySelector(".button");

function showCopyrightYear() {
    let year = new Date();
    copyright.innerHTML = year.getFullYear();
}

showCopyrightYear();

function dateMonthYear() {
    const date = new Date();
    datum.innerText = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

}

dateMonthYear();


function hoursMinutesSeconds() {
    const time = new Date();
    vrijeme.innerText = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

    hoursMinutesSeconds();

}
function clickButton(e) {
    // code for sending message on target e-mail
}

clickButton(e);
