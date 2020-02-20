/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Equality without type coercion and 3 equals sign");
/* coding examples */
log("With type coercion")
log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log("0" == false);

log(typeof 1 + " " + typeof "1");
log(1 == "1");

log("Without type coercion")

log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log("0" === false);

log(typeof 1 + " " + typeof "1");
log(1 === "1");

// != !==
