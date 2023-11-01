function arrayPlusArray(arr1, arr2) {
 const combinedArray= arr1.concat(arr2);
  const sum = combinedArray.reduce((total, currentValue) => total + currentValue, 0);
  return sum;
}
