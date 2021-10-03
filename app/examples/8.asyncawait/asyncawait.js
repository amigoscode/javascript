/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Async Await");
/* coding examples */

const logName = async (name) => {
  log(name);
  // 1. we can yield promises using await
  const transformName = new Promise((resolve, reject) => {
    setTimeout(() => resolve(name.toUpperCase()), 1000);
  });

  const result = await transformName;

  // 2. return a promise
  return result;
}

logName("antonio").then(res => {
  log("result from async function = " + res);
});

////////////

const getRandomUsers = async n => {
  try {
    const fetchRandomUsers = await
      fetch(`httpsrandomuser.me/api/?results=${n}`)
    const data = await fetchRandomUsers.json();
    data.results.forEach(user => {
      const {gender, email} = user;
      log(`${gender} - ${email}`);
    });
    return data;
  } catch(err) {
    log(err);
  }

}

getRandomUsers(5);
