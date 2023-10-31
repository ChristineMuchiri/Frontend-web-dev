function positiveSum(arr) {
  const newArr = arr.filter(number => number > 0);
  if ( newArr === 0){
    return 0;
  }
  else {
  const sum = newArr.reduce ((total, currentValue) => total + currentValue, 0);
  return sum;
    }
}
