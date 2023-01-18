/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // console.log(store);
  // console.log(stores);
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
  // console.log(stores);
  // console.log(index);
  stores.splice(index, 1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  console.log(store);
  //----------------Shallow method 1--------------------//
  // let result = {
  //   ...store,
  // };
  //-----------------Deep method 1 ------------------------//
  let result = JSON.parse(JSON.stringify(store));

  console.log(result);
  return result;
}
/* Reference used to figure out how to duplicate objects via shallow copy methods and deep 
copy methods
https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
*/

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
