/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Break and Continue");
/* coding examples */

var persons = [
  { name: "Alex", age: 22 },
  { name: "Maria", age: 30 }
];

// for (var i = 0; i <= persons.length; i++) {
//   log(persons[i].name);
//   log(persons[i].age);
//   log("----------------")
// }

var number = 0;

while(number < 5) {
  number ++;

  if (number < 5) {
    continue;
  }

  log(number);

}

// var i = 0;

// do {
//   i ++;
//   log(i)
// } while(false);
