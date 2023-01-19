/**
 * Adds a new store to the very end of the list.
 * @param {Object[]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  //push the store object into the stores array
 stores.push(store)

 //return  
 return stores
} //end of the function

/**
 * Removes a store object at the given position.
 * @param {Object[]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1)
//use splice to remove an object from the given position.
//the param index has the value of the index that we want removed and we're only removing 1 object so therefore we use the number 1 
  
//return stores => the stores array
return stores
}//end of the function



/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  
  //use the JSON() method to carry a deep copy of the store object.
  //JSON.stringify() will convert the value to a string
  const newStore = JSON.parse(JSON.stringify(store))

  //return
  return newStore
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
