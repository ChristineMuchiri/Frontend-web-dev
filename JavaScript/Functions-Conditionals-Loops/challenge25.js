function points(gamesArray) {
  let totalPoints = 0;

  for (const gameResult of gamesArray) {
    const [x, y] = gameResult.split(":").map(Number);

    if (!isNaN(x) && !isNaN(y)) {
      if (x > y) {
        totalPoints += 3;
      } else if (x === y) {
        totalPoints += 1;
      }
    }
  }

  return totalPoints;
}
