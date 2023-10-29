const expression1 = 100 % 50; 
const expression2 = 100 / 50; 
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

// Single line of code
const expression5 = !(((100 % 5) < (100 / 50)) && 300 +5 === 305);
