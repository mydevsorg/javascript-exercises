const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function getAge(deathYear, birthYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }

  return deathYear - birthYear;
}

const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);

    return currentAge > oldestAge ? current : oldest;
  });
};

findTheOldest(people).name;

// Do not edit below this line
module.exports = findTheOldest;
