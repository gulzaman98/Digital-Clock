#! /usr/bin/env node

function clock () {
    let days = ["sunday" , "Monday" , "Tuesday","wednesday" , "Thursday" , "Friday" , "Saturday"];


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
    ]
    
    let hrs:any = document.getElementById("hours")
    let min:any = document.getElementById("minutes")
    let sec:any = document.getElementById("Seconds")
    let period:any = document.getElementById("ampm")
    let date:any = document.getElementById("ddmmyy")
    let day:any = document.getElementById("dd")
    
    let time = new Date();
    
    let h:number |string = time.getHours()
    let m:number |string = time.getMinutes()
    let s:number |string = time.getSeconds()
    let d :number |string = time.getDay()
    let DD:number |string = time.getDate()
    let MM:number |string = time.getMonth()
    let YY:number |string = time.getFullYear()

    if (h > 12){
        h = h-12;
    }
    if (h == 0 ){
        h=12;
    }

    let ampm = h >=12 ? "Am" : "Pm"

    h = h < 10 ? "0"  + h : h 
    m = m < 10 ? "0"  + m : m 
    s = s < 10 ? "0"  + s : s 
    

    hrs.innerHTML=h
    min.innerHTML=m
    sec.innerHTML=s
    period.innerHTML=ampm
    date.innerHTML= months [MM] +" "+ DD + " " + YY
    day.innerHTML= days[d]
    

}
setInterval(clock,1000)


