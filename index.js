/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION #1
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  // step 1 - Determine your output data type and default value
  let animalCount = 0; // number
  // step 2 - Define your loop
  for (let i = 0; i < animals.length; i++) {
    // step 3 - Accumulate
    let count = animals[i].count;
    // console.log(count); // the count of all indexed animals
      animalCount += count;
    }
    // outside of for loop
    return animalCount; // number
  }
// console.log(getTotalCount(animals)); // node index.js
// getTotalCount(animals); // npm test

/**
 * FUNCTION #2
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  // step 1 - Determine your output data type and default value
  let kind = []; // array
  // step 2 - Define your loop
  for (let i = 0; i < animals.length; i++) {
    // step 3 - Accumulate
    let kindOfAnimal = animals[i].kind;
    kind.push(kindOfAnimal);
  }
  // outside of for loop
  return kind; // an array of strings, where each string is a kind of animal
}
// console.log(getAllKinds(animals)); // node index.js
// getAllKinds(animals); // npm test

/**
 * FUNCTION #3
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  // step 1 - Determine your output data type and default value
  let animalList = []; // array of objects
  // step 2 - Define your loop
  for (let i = 0; i < animals.length; i++) {
    // step 3 - Accumulate
    let checkAnimal = animals[i];
    if (checkAnimal.count >= minimum) {
      animalList.push(checkAnimal);
    }
  }
  // outside of for loop
  return animalList; // An array of objects
}
// console.log(filterByCountMinimum(animals, 5)) // node index.js
// filterByCountMinimum(animals, minimum) // npm test

/**
 * FUNCTION #4
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  // step 1 - Determine your output data type and default value
  let highestCount = null; // object of animal = empty
  // step 2 - Define your loop
  for (let i = 0; i < animals.length; i++) {
    // step 3 - Accumulate
    // console.log(animals[i]); // animal object
    // console.log(animals[i].count); // animal count for each object
    if (animals[i].count > highestCount) {
      highestCount = animals[i].count;
    }
  }
  // outside of for loop
  return highestCount; // object of animal with highest count
}
// console.log(getMostCommonAnimal(animals)); // node index.js
// getMostCommonAnimal(animals) // npm test

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
