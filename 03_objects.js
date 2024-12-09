//singletone -->constructor , not literals
//object.create
//object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Khushi",
  [mySym]: "myKey1",
  age: 21,
  "location": "Haryana",
  lastLoginDays: ["Monday", "Saturday"] //obj value
}

console.log(jsUser.name);
console.log(jsUser["age"]);
console.log(jsUser["location"]);
console.log(jsUser[mySym]);
jsUser.age = 18;
// Object.freeze(jsUser);
jsUser.age = 17;
console.log(jsUser);


jsUser.greeting = function() {
  console.log("Hello")
}
jsUser.greeting2 = function() {
  console.log(`hello ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());