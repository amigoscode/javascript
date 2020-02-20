/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Title");
/* coding examples */

// async function bom() {
//   const name = await fetch("http://api.icndb.com/jokes/random");
//   const res = await name.json();
//   return res.value.joke;
// }

// console.log(bom().then(console.log));

// const getRandomUsers = n => {
//   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
//   fetchRandomUsers.then(data => {
//     data.json().then(randomUsers => {
//       log(JSON.stringify(randomUsers.results.length));
//       randomUsers.results.forEach(user => {
//         const { gender, email } = user;
//         log(`${gender} - ${email}`);
//       });
//     });
//   });
// };

let bom = async n => {
  const fetchRandomUsers = await fetch(
    `https://randomuser.me/api/?results=${n}`
  );
  const data = await fetchRandomUsers.json();
  log(JSON.stringify(data.results.length));
};

bom(100).then(() => {
  log("done");
});
