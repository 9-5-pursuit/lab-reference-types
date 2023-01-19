/**
 * Adds a new store to the very end of the list.
 * @param {Object[]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
// pushing the object representing a single store to the end of the stores array of store objects.
    stores.push(store);
    return stores
}
/**
 * Removes a store object at the given position.
 * @param {Object[]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
// using the splice method to remove an index from the stores array
  stores.splice(index, 1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // I'm attempting to duplicate using a loop.
      let dupStore = {};
      let keys = Object.keys(store);
    
        for (let i = 0, len = keys.length; i < len; i++ ) {
          let key = keys[i];
          dupStore[key] = store[key]; 
        }
      // still wasn't passing the tests for new arry for boardGames and new object for address. 
      // So, I fixed this issue using the spread syntax for both the boardGames array and address object. 
      dupStore.boardGames = [...store.boardGames];
      dupStore.address = {...store.address};
      return dupStore;
}
   

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};