function find_average(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}


// arr.reduce(callback, valeurInitiale)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce