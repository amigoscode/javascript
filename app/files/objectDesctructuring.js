const getUser = () => {
  return {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
      country: 'United States',
      city: 'California',
      postCode: 'CA',
      fullAddress: {
        doorNumber: 22,
        street: 'LA st'
      }
    },
    age: 29
  }
};

const user = getUser();

const name = user.name;
const age = user.age;
const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

log(name);
log(age);
log(country);
log(doorNumber);
