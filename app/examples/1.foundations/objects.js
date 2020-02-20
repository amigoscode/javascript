/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Arrays");
/* coding examples */

var person = {
  name: "Maria Jones",
  age: 21,
  hasDriverLicence: true,
  dateOfBirth: "01/01/2000",
  address: {
    firstLine: "123",
    postCode: "SE1",
    country: "England"
  }
};

log(JSON.stringify(person));

log(person.name);
log(person.age);
log(person.hasDriverLicence);
log(JSON.stringify(person.address))

log(Object.values(person));
