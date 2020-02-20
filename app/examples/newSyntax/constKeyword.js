/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Const keyword');

let name = 'Maria';
name = {};
name = 2;

log(name);

/* ************************* */

const person = {};

person['name'] = 'Maria';

log(person.name);

const array = [];
array.push('Maria from Array');

log(array[0]);
