/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Comparison & Logical Operators");
/* coding examples */

log("Comparison Operators")
log(10 == 10);
log(10 < 10);
log(10 <= 10);
log(10 > 10);
log(10 >= 10);
log(10 != 10);
log(10 != 11);

log("Logical Operators")
log(10 == 10 && 20 == 20 && 100 == 100);
log(10 == 10 && 20 != 20);

log(20 == 30 || 10 == 10);

log(!(10 == 10));
log(!(10 == 20));

if ((10 == 20)) {
  log("if statement was executed");
}
