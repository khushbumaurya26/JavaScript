//var c = 300
let a = 300
if (true) {
  let a = 10
  const b = 20
 console.log("INNER:" , a)
}

//console.log(a);
//console.log(b);
console.log(a);


//nested
function one() {
  const username = "Khushi"

  function two() {
    const website = "hehehehe"
    console.log(username);
  }
  //console.log(website)

  two()
}

one()



/* if(true) {
  const username = "anshu"
  if(username === anshu) {
    const website = "heheh"
    console.log(username + website)
  }
 // console.log(website);
}
//console.log(username); */

//+++++++++++++++++++++++++ INTERSTING ++++++++++++++++++++
console.log(addone(5))
function addone(num) { //run
  return num + 1
}

addTwo(5)
const addTwo = function(num) {  //not run
  return num + 2
}

