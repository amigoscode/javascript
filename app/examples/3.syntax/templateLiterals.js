/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Template Literals');

const name = 'Anna';
const country = 'Canada';
const age = 33;

log("Name: " + name + " Country" + country + " age "+ age);
log(`Name ${name} Country ${country} Age ${age}`);
log(`Name ${name.length} Country ${country} Age ${age}`);
