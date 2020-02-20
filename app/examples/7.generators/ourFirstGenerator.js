/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Generators');

const getNumbers = function* () {
  yield 1;
  yield "hello";
  yield true;
  yield { name: 'Alex'};
  return "i am done";
}

const numbersGen = getNumbers();

log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(JSON.stringify(numbersGen.next().value));
log(numbersGen.next().value);
