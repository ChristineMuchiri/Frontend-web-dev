function persistence(num) {
   if ( Number.isInteger(num) && Math.abs(num) < 10){
     return 0;
   }
  const multi = (number) => {
    return String(number).split('').map(Number).reduce((accumulator, currentValue) => accumulator * currentValue);
  }
  let count = 0;
  
  while ( num >= 10){
    num = multi(num); 
    count += 1;
  }
  return count;
