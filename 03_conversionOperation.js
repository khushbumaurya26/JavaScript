let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn); //true

// 1 => true; 0 => false
// "" => false; 
// "Khushi" => true

let someNumber = 26;

let stringNum = String(someNumber);
console.log(stringNum);  //33
console.log(typeof stringNum);  //string

/*********************Operations*****************/
let value = 3;
let negValue = -value;
console.log(negValue); // -3


let str1 = "Khushi";
let str2 = "maurya";
let str3 = str1 + str2;
console.log(str3); //Khushi maurya


console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32

console.log(+true)  //1
console.log(+"")  //0


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);  //101