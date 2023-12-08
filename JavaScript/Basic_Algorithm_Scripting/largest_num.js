function largestOfFour(arr) {
  let largestt = [];
  for (let i = 0; i < arr.length; i++) {
    const largest = Math.max.apply(null, arr[i]);
    largestt.push(largest);
  }
  return largestt;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
