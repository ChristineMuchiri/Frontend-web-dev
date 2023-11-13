function arrayDiff(a, b) {
  const newArray = a.filter(element => !b.includes(element));
  return newArray;
}
