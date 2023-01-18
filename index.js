/**
 * Adds a new store to the very end of the list.
 * @param {Object[]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

/* --------- PUSH NEW STORE -------
- pushed new store into stores object (modified it)
- returned stores obj
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

/* ------- REMOVE STORE FROM OBJ --------
- used splice to remove from index given in parameters & delete 1 in stores obj
- return original array
*/
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1)
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */

/* ----- COPY OF STORE OBJ ------
- assigned a copy of the original store obj to newStoreObj
- returned new obj 
*/
function duplicateStore(store) {
  let newStoreObj = JSON.parse(JSON.stringify(store))
  return newStoreObj
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
