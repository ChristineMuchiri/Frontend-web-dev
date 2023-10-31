function basicOp(operation, value1, value2)
{
  if ( operation === '+' ){
    let sum = value1 + value2;
    return sum;
  }
  else if ( operation === '-'){
    let sub = value1 - value2;
    return sub;
  }
  else if ( operation === '*'){
    let mut = value1 * value2;
    return mut;
  }
  else if ( operation === '/'){
    let div = value1 / value2;
    return div;
  }
}
