const myArr = [0, 1, 2, 3, 4]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

//Array methods

// myArr.push(5)
// myArr.pop() //delete last element
// myArr.unshift(9) //add element at start
// myArr.shift()  //delete element ar start
// console.log(myArr.includes(9));  // 9 is exits or not

const newArr = myArr.join()  // convert to string
console.log(typeof myArr);
console.log(myArr);


console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // not change , not include last element
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);  //original array change , include last element
console.log(myn2);

