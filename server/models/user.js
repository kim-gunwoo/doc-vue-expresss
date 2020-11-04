const lowdb = require("../config/lowdb");
//const shortid = require("shortid");

module.exports = {
  create: async (req, res) => {
    lowdb.defaults({ user: [] }).write();
  },
  find: async (email) => {
    return await lowdb.get("user").find({ email: email }).value();
  },
  insert: async (user) => {
    await lowdb.get("user").push(user).write();
  },
  update: async (user) => {
    await lowdb
      .get("user")
      .find({ email: user.email })
      .assign({
        name: user.name,
        passwd: user.passwd,
      })
      .write();
  },
  delete: async (user) => {
    await lowdb.get("user").remove({ email: user.email }).write();
  },
};
