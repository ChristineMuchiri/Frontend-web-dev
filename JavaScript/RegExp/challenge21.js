let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z][A-Za-z]+\d*$|^[A-Za-z]\d\d+$/; // Change this line
let result = userCheck.test(username);
