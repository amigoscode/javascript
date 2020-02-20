/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Function Default Parameters');

const calculatePay = (yearSalary, bonus = {
  teamBonus: 0,
  employeeBonus: 0
}) => {
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 6000 }));
