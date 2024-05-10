function isAnimal(entity) {
  const entityType = entity.type;
  console.log('entity (inside of function scope)', entity);
  console.log('entityType (inside of function scope)', entityType);
  return entityType === 'animal';
}

isAnimal({ type: 'animal' });

// ReferenceError: entity is not defined
console.log('entity (outside of function scope)', entity);
// ReferenceError: entityType is not defined
console.log('entityType (outside of function scope)', entityType);

if (isAnimal({ type: 'animal' })) {
  console.log('it is an animal');
  const createAnimal = true;
  console.log('createAnimal (inside if)', createAnimal);
}

// ReferenceError: createAnimal is not defined
console.log('createAnimal (outside of if)', createAnimal);

// Workaround: Declare variable outside of scope first
let createAnimal2 = false;

if (isAnimal({ type: 'animal' })) {
  console.log('it is an animal');
  createAnimal2 = true;
  console.log('createAnimal2 (inside if)', createAnimal2);
}

// ReferenceError: createAnimal is not defined
console.log('createAnimal2 (outside of if)', createAnimal2);

// Unusual "var" behavior: reference will be pulled out of
// the scope to where it is needed (aka "hoisting")
if (isAnimal({ type: 'animal' })) {
  console.log('it is an animal');
  var createAnimal3 = true;
  console.log('createAnimal3 (inside if)', createAnimal3);
}

// ReferenceError: createAnimal3 is not defined
console.log('createAnimal3 (outside of if)', createAnimal3);
