#! /usr/bin/env node
"use strict";
function clock() {
    let days = ["sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let hrs = document.getElementById("hours");
    let min = document.getElementById("minutes");
    let sec = document.getElementById("Seconds");
    let period = document.getElementById("ampm");
    let date = document.getElementById("ddmmyy");
    let day = document.getElementById("dd");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let DD = time.getDate();
    let MM = time.getMonth();
    let YY = time.getFullYear();
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    let ampm = h >= 12 ? "Am" : "Pm";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    date.innerHTML = months[MM] + " " + DD + " " + YY;
    day.innerHTML = days[d];
}
setInterval(clock, 1000);
