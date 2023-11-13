function isValidWalk(walk) {
  if ( walk.length !== 10){
    return false
  }
  const counts ={
    'n' : 0,
    's' : 0,
    'e' : 0,
    'w' : 0
  };
  
  for (const direction of walk){
    counts[direction]++;
  }
  
  return counts['n'] === counts['s'] && counts['e'] === counts['w'];
}
