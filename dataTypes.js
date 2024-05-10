// # Undefined (primitive)
const undefinedExample = undefined;
console.log('undefinedExample', undefinedExample);

// undefined values returned from uninitialized variables
let undefinedExample2;
console.log('undefinedExample2', undefinedExample2);

// undefined returned by accessing non-existent properties
console.log('console.loog', console.loog);

// undefined returned from functions without a return value
function noReturnValue() {}
console.log('noReturnValue()', noReturnValue());

// # Null (primitive) - intentionally empty
const user = null;
console.log('user', user);

// # Boolean (primitive)
// const: for values that don't change
const isRhinoceres = true;
console.log('isRhinoceres', isRhinoceres);

// let: allows altering the value
let isAnimal = true;
isAnimal = false;
console.log('isAnimal', isAnimal);

// Creation of boolean using a comparison (===)
const entity = 'animal';
const isAnimal2 = entity === 'animal';
console.log('isAnimal2', isAnimal2);

// # Number (primitive)
const numberOfAnimals = 13;
console.log('numberOfAnimals', numberOfAnimals);

// Floating point math is not always accurate
console.log('0.1 + 0.1', 0.1 + 0.1);
console.log('0.1 + 0.2', 0.1 + 0.2);
console.log('1 + 1', 1 + 1);
console.log('1 + 2', 1 + 2);

// Math above Number.MAX_SAFE_INTEGER will become unpredictable
console.log('9007199254740991', 9007199254740991);
console.log('9007199254740991 + 1', 9007199254740991 + 1);
console.log('9007199254740991 + 2', 9007199254740991 + 2);
console.log('9007199254740991 + 3', 9007199254740991 + 3);

// # BigInt (primitive)
console.log('9007199254740991n', 9007199254740991n);
console.log('9007199254740991n + 1n', 9007199254740991n + 1n);
console.log('9007199254740991n + 2n', 9007199254740991n + 2n);

// # String (primitive)
const name = 'karl';
console.log('name', name);

// Concatenation / interpolation (adding strings to strings)
console.log('concat with plus', name + ' horky');
console.log('interpolation', `${name} horky`);
console.log(
  'template strings with multiple lines',
  `
${name}
  horky
`,
);

// String methods
console.log('length', name.length);
console.log('replace', name.replace('k', 'h'));
console.log('substring', name.substring(0, 1));
console.log('slice', name.slice(0, 1));
console.log('toUpperCase', name.toUpperCase());
console.log('padStart', name.padStart(10, '0'));

// # Symbol (primitive)
const symbol = Symbol();
console.log('symbol', symbol);

// # Object (non-primitive)
const user2 = {
  id: 2,
  name: 'sheila',
  // Nested object
  address: {
    streetName: 'Wipplingerstraße',
    streetNumber: 56,
  },
};

// Accessing object properties
console.log('user2.name', user2.name);
console.log('user2.address.streetNumber', user2.address.streetNumber);
console.log("user2['name']", user2['name']);
console.log(
  "user2['address']['streetNumber']",
  user2['address']['streetNumber'],
);

// Accessing object properties with dynamic key name
const key = 'id';
console.log('user2[key]', user2[key]);

// Object manipulation (aka "mutation")
user2.age = 27;

// # Array (non-primitive)
const numbers = [1, 2, 3, 4, 5];

console.log('numbers', numbers);

const animals = [
  {
    id: 1,
    type: 'Rhinoceres',
  },
  {
    id: 2,
    type: 'Giraffe',
  },
  {
    id: 3,
    type: 'Cat',
  },
  {
    id: 4,
    type: 'Pig',
  },
  {
    id: 5,
    type: 'Dog',
  },
  {
    id: 6,
    type: 'Cat',
  },
];

console.log('animals', animals);

// Accessing an item
console.log('animals[1]', animals[1]);

// Array methods
console.log(
  ".find type === 'Cat'",
  animals.find((animal) => animal.type === 'Cat'),
  // Version with function keyword, longer and not necessary
  // animals.find(function findFunction(animal) {
  //   return animal.type === 'Cat';
  // }),
);
console.log(
  ".filter type === 'Cat'",
  animals.filter((animal) => animal.type === 'Cat'),
);
console.log(
  '.map to strings',
  animals.map((animal) => `${animal.id} -- ${animal.type}`),
);

// Modifying the array (aka "mutating")
numbers.push(6); // Add to end of array
console.log('numbers after push', numbers); // [1, 2, 3, 4, 5, 6]

// # Function (non-primitive)
function noReturnValue2() {}
console.log('noReturnValue2()', noReturnValue2());

const noReturnValue3 = () => {};
console.log('noReturnValue3()', noReturnValue3());

function sum(numberA, numberB) {
  return numberA + numberB;
}
console.log('sum(1, 2)', sum(1, 2));
