// // ReferenceError: x is not defined
// console.log(x);

// // TypeError: x is not a function
// const x = 123;
// console.log(x());

// // TypeError: Cannot read properties of undefined (reading 'name')
// const undefinedExample = undefined;
// console.log('undefinedExample.name', undefinedExample.name);

// TypeError: Cannot read properties of undefined (reading 'streetNumber')
const user2 = {
  id: 2,
  name: 'sheila',
  // Nested object
  address: {
    streetName: 'Wipplingerstraße',
    streetNumber: 56,
  },
};
console.log('user2.addresss.streetNumber', user2.addresss.streetNumber);
