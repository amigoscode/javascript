/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Variables')
/* coding examples */

var name = "Maria Jones";
var age = 21;
var hasDriverLicense = true;
var empty = undefined;

log(name + " " + "type = " + typeof name);
log(age + " " + "type = " + typeof age);
log(hasDriverLicense + " " + "type = " + typeof hasDriverLicense);
log(empty + " " + "type = " + typeof empty);
