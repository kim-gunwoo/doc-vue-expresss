const lowdb = require("../config/lowdb");

console.log(lowdb.get("users").value());
