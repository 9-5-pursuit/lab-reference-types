/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
 
  stores.push(store)

  return stores
}
// let lucianoHobbies = [];
// let hollieHobbies = lucianoHobbies;

// lucianoHobbies.push("drawing", "coding", "playing piano");
// hollieHobbies.push("skateboarding", "cooking", "coding");

// console.log(lucianoHobbies);
/*
  [
    'drawing',
    'coding',
    'playing piano',
    'skateboarding',
    'cooking',
    'coding'
  ]
*/
/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {

  stores.splice(index, 1)// returns the deleted elemet 

  //


  return stores

  

  //shift removes from front of array
  //pop removes from end of the array
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {

  let duplicate = JSON.parse(JSON.stringify(store))

  duplicatebBoardgames = duplicate.boardgames

  newAdress = duplicate.adress

  newGames = duplicate.boardgames



  return duplicate




//   let copiedPerson = JSON.parse(JSON.stringify(person));

// copiedPerson.firstName = 'Jane'; // disconnected

// copiedPerson.address.street = 'Amphitheatre Parkway';
// copiedPerson.address.city = 'Mountain View';

// console.log(person);

}





module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
