/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
// logTitle('2. Variables')
/* coding examples */

// var name = "Maria Jones";
// var age = 21;
// var hasDriverLicense = true;
// var empty = undefined;

// log(name + " " + "type = " + typeof name);
// log(age + " " + "type = " + typeof age);
// log(hasDriverLicense + " " + "type = " + typeof hasDriverLicense);
// log(empty + " " + "type = " + typeof empty);

// var person = {
//     name: "Maria Jones",
//     age: 21,
//     hasDriverLicense: true,
//     dateOfBirth: "01/01/2000",
//     address: {

//         firstLine: "230 Burham St",
//         city: "Cleveland",
//         state: "Ohio"
//     }
// };

// // log(person+"\n"); 
// // log(JSON.stringify(person)+"\n")
// // log(person.name+"\n")
// log(JSON.stringify(person.address)+"\n")
// log(Object.values(person)+"\n")

// logTitle('3. Arrays');

// var names = ["Alex", "Maria", "Sam", "Kelly"]
// log(names)
// log(names[0])
// log(names.length)

// for (var n of names) { log(n)}

// for (var n in names) { log(n + " - " + names[n])} 
/* or

names.forEach(function(n, index)
{
    log(index+ " - "+n)

})

*/

// logTitle('4. Arithmetic Operators');

// var add = 2+3
// var subt = 2-3
// var div = 2/3
// var multi = 2*3
// var rem = 2%3

// log (add)
// log (subt)
// log (div)
// log (multi)
// log (rem)

logTitle('5. Functions');

function addNumbers (a,b) {
    return a+b;
}
var result = addNumbers(4,5);
log(result);

log(Object.keys({name: "Anna", age: 21}));
log(Object.values({name: "anna", age: 21}))
// log("OR another method using variable person")
// var person = {name: "anna", age: 21};
// log(Object.keys(person))
// log(Object.values(person))

log("James Bond".toLowerCase());
log("James Bond".toLowerCase());
log("James Bond".startsWith("James"));
log("James Bond".endsWith("James"));
