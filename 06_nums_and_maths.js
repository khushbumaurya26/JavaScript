//*********** NUMBERS **********
const score = 400

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00 

const otherNumber = 1123.968
console.log(otherNumber.toPrecision(5));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//*********** MATHS *******************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(4, 5, 7));
console.log(Math.max(4, 5, 7));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
