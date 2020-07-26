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

// logTitle('5. Functions');

// function addNumbers (a,b) {
//     return a+b;
// }
// var result = addNumbers(4,5);
// log(result);

// log(Object.keys({name: "Anna", age: 21}));
// log(Object.values({name: "anna", age: 21}))
// /*
// log("OR another method using variable person")
// var person = {name: "anna", age: 21};
// log(Object.keys(person))
// log(Object.values(person))
// */

// log("James Bond".toLowerCase());
// log("James Bond".toLowerCase());
// log("James Bond".startsWith("James"));
// log("James Bond".endsWith("James"));

// logTitle('6. Loops');

// var persons = [
//    { name: "Bala", age: 40 },
//    { name: "Alex", age: 20 }
// ]

// for ( var i =0; i<=persons.length; i++)
// {  log(persons[i].name)
//    log(persons[i].age)
// }
// while
// do-while
//break
//continue
//if

// logTitle('7. Switch');

// switch(new Date().getDay()) {

//     case 1: log("Monday")
//     break;
//     case 2: log("Tuesday")
//     break;
//     case 3: log("wednesday")
//     break;
//     case 4: log("Thursday")
//     break;
//     case 5: log("Friday")
//     break;
//     case 6: log("Saturday")
//     break;
//     case 0: log("Sunday")
//     break;
// }

// logTitle('8. Logical Operators/Type coersion');

// /*  ==, !=, <, >, <=, >= */

// log("With type coersion")

// log(typeof 0 + " " + typeof false)
// log(0 == false)

// log(typeof "0" + " " + typeof false)
// log("0" == false)

// log(typeof 1 + " " + typeof "1")
// log(1 == "1")

// log("\n")
// log("Without type coersion")

// log(typeof 0 + " " + typeof false)
// log(0 === false)

// log(typeof "0" + " " + typeof false)
// log("0" === false)

// log(typeof 1 + " " + typeof "1")
// log(1 === "1")

logTitle('9. Maps | Filter |Reduce')

var map = [1,2,3,4,5].map(function(n) {
    return n*n;
})

log("[].map")
log(map+"\n");

var filter = [1,2,3,4,5, 66, 87, 100].filter(function(n) {
    return n%2==0 && n>5
})

log("[].filter")
log(filter+"\n");

var reduce = [1,2,3,4,5].reduce(function(accumulator, current) {
    return accumulator + current
})

log("[].reduce")
log(reduce+"\n");