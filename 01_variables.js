const accountId = 20531
let accountEmail = "khushi26@gmail.com"
var accountPass= "2601"
accountCity = "Prayagraj"
let accountState;

// accountId = 20531            not allowed
accountEmail = "khushbu01@gmail.com"
accountPass= "118"
accountCity = "Siwan"

/*
Prefer not to use (var)
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])



