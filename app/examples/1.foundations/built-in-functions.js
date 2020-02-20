/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Built in Functions')
/* coding examples */

var person = {name: "Anna", age: 20};
log(Object.keys(person));
log(Object.values(person));

log("James Bond".toLowerCase());
log("James Bond".toUpperCase());
log("James Bond".endsWith("Bond"));
log("James Bond".startsWith("James"));
