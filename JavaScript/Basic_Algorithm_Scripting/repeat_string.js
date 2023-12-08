function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  else {
    let empty = '';
     for (let i = 0; i < num; i++){
      empty = empty + str;
    }
     return empty;
  }
}

repeatStringNumTimes("abc", 3);
