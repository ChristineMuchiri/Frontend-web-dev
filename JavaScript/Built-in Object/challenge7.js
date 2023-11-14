function lowercaseCount(str){
    const count = (str.match(/[a-z]/g) ||[]).length;
  return count;
}
