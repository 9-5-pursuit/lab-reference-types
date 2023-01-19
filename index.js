/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store);
return stores;
  // test("it should modify the `stores` array by adding a new store", () => {
  //   const stores = [];
  //   const newStore = {
  //     street: "42-11 Broadway",
  //     city: "Astoria",
  //     state: "NY",
  //     zip: "11103",
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  let newStores = [];
  newStores = stores.slice([index], 1);
  newStores = stores;
  newStores = stores.pop();
  newStores = stores.slice([2], 1);

  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {

  let duplicStore = Object.assign({}, store);

  duplicStore.boardGames = Object.assign([], store.boardGames);
  duplicStore.address = Object.assign({}, store.address);
 
  // test("it should use a new array for the `boardGames` key", () => {
  //   const store = {
  //     name: "Gamestoria",
  //     boardGames: [
  //       "Terra Mystica",
  //       "Alhambra",
  //       "Scythe",
  //       "Carcassonne",
  //       "Azul",
  //     ],
  //     address: {
  //       street: "42-11 Broadway",
  //       city: "Astoria",
  //       state: "NY",
  //       zip: "11103",
  //     },

  return duplicStore;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
