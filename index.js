/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {

  const Array = [ 
        {
         "city": "Astoria",
         "state": "NY",
         "street": "42-11 Broadway",
         "zip": "11103",
       },
     ];

  const newStore = Array;
 store.push();

  //newStore.concat(store)

console.log(newStore)

return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {

let removeStoreAtPosition = stores

removeStoreAtPosition.pop()
  return store
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {


let storeDuplicate = Object.assign({}, store);
//toreDuplicate.games


  return store
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
