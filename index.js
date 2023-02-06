/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
// add a single store to the stores object
  stores.push(store);
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  // using splice method to remove the item at the given position
  stores.splice(index, 1);
  return stores;
 
  }

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
// using Object.assign method copy the store object to the variable newStore
  let newStore = Object.assign({}, store);  //  (OR)let newStore = {...store}
// add a new array for the boardGames key
  newStore.boardGames = Object.assign([], store.boardGames);
// add a new object for the address key
  newStore.address = Object.assign({}, store.address);
// return the copied store
  return newStore;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
