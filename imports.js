// Named import
import { animalCount, isAnimal } from './imports/a.js';
// Default import
import sum from './imports/b/c.js';

// Avoid require() - this is CommonJS, an older format:
// const sum = require('./imports/b/c.js');

console.log('animalCount', animalCount);
console.log('isAnimal', isAnimal);
console.log('sum', sum);

// import * as x from './imports/a.js';
//
// console.log('animalCount', x.animalCount);
// console.log('isAnimal', x.isAnimal);
