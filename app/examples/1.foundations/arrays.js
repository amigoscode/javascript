/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Arrays");
/* coding examples */

var name = "Alex";
var names = ["Alex", "Maria", "Sam", "Mohammado"];
log(names);

log(names[1]);
log(names.length);

for (var n of names) {
  log(n);
}

names.forEach(function(n, index) {
  log(index + " - " + n);
});
