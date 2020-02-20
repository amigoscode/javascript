/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Arithemetic Operators");
/* coding examples */

/*
  + - / % *
*/

var addition = 2 + 2;
var subtraction = 3 - 90;
var division = 10 / 5;
var multiplication = 3 * 30;
var remainder = 10 % 4;

log(addition);
log(subtraction);
log(division);
log(multiplication);
log(remainder);
