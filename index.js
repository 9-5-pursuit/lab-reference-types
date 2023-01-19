/**
 * Adds a new store to the very end of the list.
 * @param {Object[]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
/**
 * I pushed the object "store" onto the array of objects "stores" which adds it to the end of the array.
 */
function addNewStore(stores, store) {
  stores.push(store);
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
/**
 * I spliced(removed) the given index number out of the given array "stores" and returned the modified array.
 */
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
/**
 * I googled how to duplicate and object in javascript and found 3 ways it can be done.
 * The first and most used option is by using the lodash library, the second is by using the ramda library, 
 * and the last one is by using JSON. Since the package files in this repo are in JSON, I chose to use JSON.
 * I looked up JSON.stringify() in MDN and found that it converts everything to a string. Then I looked
 * at JSON.parse() and found that it revives values from strings back to their original value.
 * When combined the two methods are used to do a deep copy of an object or array in order to also include 
 * any nested objects or arrays.
 */
function duplicateStore(store) {
  const newStore = JSON.parse(JSON.stringify(store));
  return newStore;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
