function addTwoNo(num1, num2){
  //let res = num1, num2
  //return res
  return num1 + num2
}
const res = addTwoNo(3, 5)
console.log(res);


function loginUser(username) {
  if(username === undefined) {  //!username
    console.log("Plz enter a username")
    return
  }
  return `${username} just logged in`
}
console.log(loginUser("Khushi"))


// e-commerce shopping cart
function calCartPrice(...num1) { //rest operator ... ==> pass multiple values
  return num1
}
console.log(calCartPrice(200, 400, 2000))


//pass the obj. qus
const user = {
  username: "Khushi",
  prices: 199
}
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}
//handleObject(user) //==>1st way to pass the argument
handleObject({
  username: "Khushbu",
  prices: 299
})


//pass the array qus
const myNerArr = [200, 400, 100, 600]
function returnSecValue(getArray) {
  return getArray[1]
}
// console.log(returnSecValue(myNerArr))  //1st way
console.log(returnSecValue([234, 543, 543]))