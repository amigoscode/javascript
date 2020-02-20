/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("If statement");
/* coding examples */

var person = {
  name: "Anna",
  age: 16
}

if (person.age >= 18) {
  log(person.name + " is an adult");
} else if (person.age == 17) {
  log(person.name + " is about to be an adult");
} else {
  log(person.name + " is not an adult");
}
