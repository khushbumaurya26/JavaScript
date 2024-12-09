let myDate = new Date()

/*console.log(myDate.toString());
console.log(myDate.Date());
console.log(myDate.toLocalString());
console.log(typeof myDate); */

//let myCreatedDate = new Date(2024, 0, 24)
//let myCreatedDate = new Date(2024, 0, 24, 5, 3)
let myCreatedDate = new Date("01-14-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myTimeStamp.getTime());
//console.log(Math.floor(Date.now() / 10000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.Day());

// `${(newDate.Day()} and th time `

newDate.toLocaleString('default', {
  weekday: "long"
})
