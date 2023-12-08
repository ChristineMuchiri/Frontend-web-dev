function findLongestWordLength(str) {
  const arr = str.split(' ');
  
  let maxLength = 0;

  arr.forEach(function (word) {
    if (word.length > maxLength) {
      maxLength = word.length;
    };
  }); 
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")
