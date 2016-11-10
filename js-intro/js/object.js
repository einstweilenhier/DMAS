const person1 = {};

person1.firstName = 'John';
person1.lastName = 'Doe';

const person2 =
{
  firstName: 'Jane',
  lastName: 'Doe',
}

const people = {};

people.person1 = person1;
people.person2 = person2;

console.log(people.person1.firstName);
console.log(people.person2.firstName);