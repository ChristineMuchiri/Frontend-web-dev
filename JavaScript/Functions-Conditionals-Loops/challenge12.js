function getAverage(marks){
  const sum = marks.reduce((total, currentValue) => total + currentValue, 0);
  const avg = sum / marks.length;
  return Math.floor(avg);
}
