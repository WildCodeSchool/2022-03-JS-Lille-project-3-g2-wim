const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";
}

module.exports = UserManager;
