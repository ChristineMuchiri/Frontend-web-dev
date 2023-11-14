function capitalize(s){
  let result1 = '';
  let result2 = '';
  
  for ( let i = 0; i < s.length; i++){
    if ( i % 2 === 0){
      result1 += s[i].toUpperCase();
      result2 += s[i]
    }
    else {
      result1 += s[i];
      result2 += s[i].toUpperCase();
    }
  }
  const result3 = new Array(result1, result2);
  return result3;
}
