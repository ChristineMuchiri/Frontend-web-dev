function countSheeps(sheep) {
  let count = 0;
  for ( let i=0; i<sheep.length; i++)
    
    if (sheep[i] === true){
      count = count + 1;
      
    }
  else if (sheep[i] === false){
    count = count + 0;
    
  }
  else if (sheep[i] === null){
    count = count + 0;
    
  }
  else if (sheep[i] === undefined){
    count = count +0;
   
  }
  else if (sheep[i] === []){
    count = count + 0;
    
  }
  return count;
  }
