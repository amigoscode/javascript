/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
// import { add } from './Math';
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

// logTitle('9. Maps | Filter |Reduce')

// var map = [1,2,3,4,5].map(function(n) {
//     return n*n;
// })

// log("[].map")
// log(map+"\n");

// var filter = [1,2,3,4,5, 66, 87, 100].filter(function(n) {
//     return n%2==0 && n>5
// })

// log("[].filter")
// log(filter+"\n");

// var reduce = [1,2,3,4,5].reduce(function(accumulator, current) {
//     return accumulator + current
// })

// log("[].reduce")
// log(reduce+"\n");

// logTitle('10. Callbacks')

// function callbackExample(name, callback) {
//     log (callback(name))
// }

// // var callback = function(name) {
// //     return "Hello " + name;
// // }

// callbackExample("Anna Maria", function(name) {
//     return "Hello " + name;
// })



/* your imports */
// import * as Math from './Math'
// import * as Math from './Math'
// logTitle("11. Named Exports / Imports")

// log(Math.add(8,2))
// log(Math.divide(36,6))
// log(Math.pi)

// /* or if just selective function */

// import {divide, pi} from './Math'

// log(divide(36,6))
// log(pi)



// import Animal from './Animal'
// logTitle("12. Default Exports / Imports");

// var animal = new Animal();
// log(animal.getClassType());


// logTitle("13. Variable Scope & LET");

// // for ( var i =0; i < 10; i++){
// //     log(i)
// // }
// // log(i)
// // log("\n")

// for ( let i =0; i < 10; i++){
//     log(i)
// }
// log(i)
// log("\n")

// logTitle("14. Const Keyword")

// const person = {};
// person['name'] = "Maria"
// log(person.name)

// const array = []
// array.push('Maria from Array')
// log(array[0])

// logTitle("15. Template Literals")

// let name = 'Anna';
// const age = 22;
// const country = 'USA';

// log ("Name: "+ name + ", Country: " + country + ", Age: " + age )
// log("\n");
// log(`Name: ${name} , Country: ${country.length} , Age: ${age}`);

// let firstName = 'John',
//     lastName = 'Doe';

// let greeting = `Hi ${firstName}, ${lastName}`;
// log(greeting)
// log(firstName.length); // Hi John, Doe

// logTitle("16. Spread operator Arrays")

// const arrayOne = ['Maria', 'Anna', 'Alex']
// const arrayTwo = ['Olesi', 'Bahu', 'Serin']

// const concatArray = [...arrayOne, ...arrayTwo]

// concatArray.forEach(function(name) {
//     log(name)
// })

// const name = "Bhatawadekar"
// const nametoCharArray = [...name]
// nametoCharArray.forEach(function(letter) {
//     log(letter)
// })

// const addNumbers = function(n1,n2,n3,n4,n5,n6,n7){
// return n1+n2+n3+n4+n5+n6+n7
// }

// const numbers = [1,2,3,4,5,6,7]
// const addition = addNumbers(...numbers)
// log(addition)


// logTitle("17. Spread Operator Objects")

// const address = {
//     city: 'Detroit',
//     country: 'USA',
//     zipcode: 48304
// }

// const name = {
//     firstName: 'James',
//     lastName: 'Bond'
// }

// const person = {...address, ...name}
// log(JSON.stringify(person, null, 2))



logTitle("18. Arrow Functions")

const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
  };
  
const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));
  
const add = (n1, n2) => n1+n2
  
const milesToKm = (miles) => miles * 1.60934;
  
  log(hello());
  log(powers);
  log(add(100,100));
  log(milesToKm(100));