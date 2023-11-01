var humanYearsCatYearsDogYears = function(humanYears) {
  
  if ( humanYears === 1){
    return [humanYears, 15, 15];
  }
  if ( humanYears === 2){
    return [humanYears, 24, 24];
  }
  const extraYears = humanYears - 2;
  const extraCatYears = extraYears * 4;
  const extraDogYears = extraYears * 5;
  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}
