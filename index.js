/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/
function getCartTotal(cart) {
  if (cart.length === 0) throw "Cart is empty.";
  let result = 0;
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}

//console.log(getCartTotal([]));

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
function filterProductsByPriceRange(products, min, max) {
  if (products.length === 0) throw "Cart is empty.";
  if (typeof min !== 'number') throw "min is not a number.";
  if (typeof max !== 'number') throw "max is not a number.";
  if (max <= 0) throw "max must be greater than zero";
  if (min < 0 || min > max) throw "min must be greater than zero and greater than max";

  return products.filter(product => {
    if(product.priceInCents === undefined) throw "priceInCents is undefined";
    if(product.priceInCents >= min && product.priceInCents <= max) return true
  });
}

//console.log(filterProductsByPriceRange(exampleProducts, 10000, 30000));                   

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  let total = 0;
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    total = getCartTotal(filteredProducts);
  }
  catch {
    return 0;
  }

  return total;
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
