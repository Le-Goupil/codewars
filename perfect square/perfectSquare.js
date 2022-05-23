function perfectSquare(string) {
  let result = 0;
  if (!string.match(",")) {
    string = string.split("\n");
    string.map((arr) => (result += arr.length));
    return Math.pow(string.length, 2) === result;
  } else {
    return false;
  }
}