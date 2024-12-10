//const chai = function() {
//  letusername = "Khushi"
  //console.log(this.username);  
//}

const chai = () => {  //arrow funx
    letusername = "Khushi"
    console.log(this); 
}


//const addTwo = (num1, num2) => {  //explicitor==> use curly braces with return
  //return num1= num2
//}

//const addTwo = (num1, num2) => ( num1 + num2 ) //implicitoe
//const addTwo = (num1, num2) =>  num1 + num2 
const addTwo = (num1, num2) => ({username: "Khushi"})
console.log(addTwo(3, 4))
