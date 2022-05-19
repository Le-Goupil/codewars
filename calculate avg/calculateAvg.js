function find_average(array) {
  return array.length > 0 ? array.reduce((a,b) => a + b, 0) / array.length : 0;
}


// arr.reduce(callback, valeurInitiale)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce