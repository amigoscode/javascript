/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Callbacks')
/* coding examples */

function callbackExample(name, callback) {
  log(callback(name));
}

var callback = function(name) {
  return "Hola " + name;
}

callbackExample("Abel Mohammado", function(name) {
  return "Hola " + name;
});
