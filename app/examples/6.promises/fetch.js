/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Promises & Fetch Api');

const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
  fetchRandomUsers.then(data => {
    data.json().then(randomUsers => {
      log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach(user => {
        const {gender, email} = user;
        log(`${gender} - ${email}`);
      });
    })
  });
}

getRandomUsers(100);
