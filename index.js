/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
let newStore = [];
let storeAdded = store;
let newList = stores;
newList.push(storeAdded);
return newList 
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
 let removedStore = [];
  let storeRemoved = index;
   let newList2 = stores;
    newList2.splice(storeRemoved, index)
  return newList2
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
let newStoreList = store 
let newArray = newStoreList
let copy = Object.assign([], newArray)
  return copy
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};

// const store = {
//   name: "Gamestoria",
//   boardGames: ["Terra Mystica", "Alhambra", "Scythe", "Carcassonne", "Azul"],
//   address: {
//     street: "42-11 Broadway",
//     city: "Astoria",
//     state: "NY",
//     zip: "11103",
//   },
