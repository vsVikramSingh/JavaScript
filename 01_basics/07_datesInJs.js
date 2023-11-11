
// Dates


// in javascript month start from 0 => JAN


let myDate = new Date()
console.log(myDate) // 2023-11-11T10:55:16.070Z
console.log(myDate.toString()) // Sat Nov 11 2023 16:28:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Sat Nov 11 2023
console.log(myDate.toLocaleString()) // 11/11/2023, 4:28:33 pm
console.log(typeof myDate) // Object



let myCreatedDate = new Date(2023, 0, 3)
console.log(myCreatedDate.toDateString()) // Tue Jan 03 2023


let myCreatedDate1 = new Date(2023, 0, 3, 5, 3)
console.log(myCreatedDate1.toLocaleString()) // 3/1/2023, 5:03:00 am


let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString()) // 14/1/2023, 12:00:00 am
console.log(myCreatedDate2.toLocaleDateString()) // 14/1/2023
console.log(myCreatedDate2.getTime()) // 1673634600000


let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1699701196290
console.log(Date.now()/1000) // 1699701308.719
console.log(Math.floor(Date.now()/1000)) // 1699701400



let newDate = new Date()
console.log(newDate) // 2023-11-11T11:19:06.629Z
console.log(newDate.getMonth() + 1) // 11
console.log(newDate.getDay()) // 6


newDate.toLocaleString('default', {
    weekday: "long"
})