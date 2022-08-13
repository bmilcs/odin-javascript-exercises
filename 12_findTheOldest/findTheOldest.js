const findTheOldest = function (people) {
  const oldestPerson = people.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
    if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
    a.Age = a.yearOfDeath - a.yearOfBirth;
    b.Age = b.yearOfDeath - b.yearOfBirth;
    return a.Age > b.Age ? -1 : 1;
  });
  console.log("Final");
  console.table(oldestPerson);
  return oldestPerson[0];
};

function getAge(birth, death) {
  if (!death) death = new Date().getFullYear();
  return birth - death;
}

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
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

console.table(findTheOldest(people));
