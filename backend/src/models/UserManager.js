const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, user.id]
    );
  }
}

module.exports = UserManager;
