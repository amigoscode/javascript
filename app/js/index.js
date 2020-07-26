/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Variables')
/* coding examples */

// var name = "Maria Jones";
// var age = 21;
// var hasDriverLicense = true;
// var empty = undefined;

// log(name + " " + "type = " + typeof name);
// log(age + " " + "type = " + typeof age);
// log(hasDriverLicense + " " + "type = " + typeof hasDriverLicense);
// log(empty + " " + "type = " + typeof empty);

var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicense: true,
    dateOfBirth: "01/01/2000",
    address: {

        firstLine: "230 Burham St",
        city: "Cleveland",
        state: "Ohio"
    }
};

// log(person+"\n"); 
// log(JSON.stringify(person)+"\n")
// log(person.name+"\n")
log(JSON.stringify(person.address)+"\n")
log(Object.values(person)+"\n")