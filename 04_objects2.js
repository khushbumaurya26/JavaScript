// const tinderUser = new Object() // singletone obj.
const tinderUser = {}

tinderUser.id = "123sd"
tinderUser.name = "Khushi"
tinderUser.isloggedin = false

//console.log(tinderUser);

const regularUser = {
  email: "khushi23@gmail.com",
  fullname: {
    userfullname: {
      firstname: "khushi",
      lastname: "maurya"
    }
  }
}

//console.log(regularUser.fullname.userfullname.firstname); //nested obj access

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}; //use this
console.log(obj3);

//many obj present in array 
const users = [
  {
    id: 1,
    email: "vg@gmail.com"
  },
  {
    id: 1,
    email: "vg@gmail.com"
  },
  {
    id: 1,
    email: "vg@gmail.com"
  },
  {
    id: 1,
    email: "vg@gmail.com"
  }
]
users[1].email  //access
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //find the property

 //***************DECONSTRUCTING******************** */
const course = {
  coursename: "js",
  price: "345"
}

// course.courseInstructor // not prefer

const {coursename : crn} = course  //name chng

// console.log(coursename)
console.log(crn);

