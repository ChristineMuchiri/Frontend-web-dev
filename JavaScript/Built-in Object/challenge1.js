function filter_list(l) {
  const result = l.filter((int) => Number.isInteger(int));
  return result;
}
