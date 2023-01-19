/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
// updated 
// add store to stores return the modified array
function addNewStore(stores, store) {
  stores.push(store)
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
// original
// removes depending on its index return the modified array 
// only removes one at a time
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1)
  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
// a copy
// deep copy is completely disconnected from the original object unlike the shallow copy where some are still linked together
function duplicateStore(store) {
  const newStore = JSON.parse(JSON.stringify(store))
  return newStore
}

















module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
