function getCount(str) {
  const vowelCount = (str.match(/[aeiou]/g) || []).length;
  return vowelCount;
}
