/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Switch");
/* coding examples */

var person = {
  name: "Anna",
  age: 16
}

switch(true) {
  case (person.age == 17):
    log(person.name + " is about to be an adult");
    break;
  case (person.age >= 18):
    log(person.name + " is an adult");
    break;
  default:
    log(person.name + "is not an adult");
}

switch (new Date().getDay()) {
  case 6:
    log("Saturday")
    break;
  case 5:
    log("Friday")
    break;
  default:
    log("I dont know")

}
