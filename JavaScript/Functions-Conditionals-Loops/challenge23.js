function century(year) {
  if ( year % 100 !== 0){
  const cent = Math.floor(year / 100) + 1;
  return cent;
}
  else {
    return year / 100;
  }
}
