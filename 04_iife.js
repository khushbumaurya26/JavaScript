// Immediately Invoked Function Experssion (IIFE)
// for safe with global polution
(function chai(){
  //name IIEF
  console.log(`db connect`)
}) ();

((name) => {
  console.log(`db connect two ${name}`)
}) ('Khushi');