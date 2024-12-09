const cartoons = ["Doraemon", "Shinchain"]
const super_heros = ["flash", "batman"]

// cartoons.push(super_heros)
// console.log(cartoons);
// console.log(cartoons[2][0]); //flash

// const allHeros = cartoons.concat(super_heros)
// console.log(allHeros); //return new array (merge)

//prefer spread operation===>  for merge the array
const allNew = [...cartoons, ...super_heros]
console.log(allNew);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const res = anotherArr.flat(Infinity)
console.log(res)

console.log(Array.isArray("Khushi"))
console.log(Array.from("Khushi"))
console.log(Array.from({name: "Khushi"}))  //empty array

const num1 = 100;
const num2 = 200;
console.log(Array.of(num1, num2))

