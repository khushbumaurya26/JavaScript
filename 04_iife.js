// Immediately Invoked Function Experssion (IIFE)
// for safe with global polution
(function chai(){
  //name IIEF
  console.log(`db connect`)
}) ();

((name) => {
  console.log(`db connect two ${name}`)
}) ('Khushi');



const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map((num) => { return num + 10})    //{ with return}

//const newNums = myNumbers.map((num) => return num + 10)

const newNums = myNumbers
                 .map((num) => num * 10)  //return value
                 .map((num) => num + 1)
                 .filter((num) => num >=40)  // only true and false
console.log(newNums);

/*++++++++++reduce()+++++++++++++++++++++++++ */
const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (acc, currval) {
  //console.log(`acc: ${acc} and currval: ${currval}`);
  //return acc + currval
//}, 3) 

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);