/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Variables");
/* coding examples */

var name = "Maria Jones";
var age = 21.5;
var hasDriverLicence = true;
var empty = undefined;

log(name + " type = " + typeof name);
log(age + " type = " + typeof age);
log(hasDriverLicence + " type = " + typeof hasDriverLicence);
log(empty + " type = " + typeof empty);
