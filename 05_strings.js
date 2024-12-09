const name = "Khushi"
const repoNumber = 26

console.log(`hello ${name} your repoNumber is ${repoNumber}`);


const gameName = new String('Khushbu-maurya')
console.log(gameName[0]); //K
console.log(gameName.__proto__); //{}
console.log(gameName.length); //7
console.log(gameName.toUpperCase());  //KHUSHBU
console.log(gameName.charAt(2)); //u
console.log(gameName.indexOf('u')); //2


const newString = gameName.substring(0, 4) //not include last value====> Khus
console.log(newString);

const anotherString = gameName.slice(-4, 4); //s
console.log(anotherString);

const newStringOne = "  Khushi  "
console.log(newStringOne)
console.log(newStringOne.trim()); //remove unneccessary space

const url = "http://khushi.com/khushi%26maurya"
console.log(url.replace('%26', '_'))  //http://khushi.com/khushi_maurya
console.log(url.includes('khushi')) //true (keyvalue is there ar not)

console.log(gameName.split('-'))