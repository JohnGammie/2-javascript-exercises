const findTheOldest = function (people) {
  people.forEach((person) => {
    person.age = computeAge(person);
  });

  people.sort((a, b) => b.age - a.age);
  return people[0];
};

function computeAge(person) {
  if (!isNaN(person.yearOfDeath)) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    let currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
