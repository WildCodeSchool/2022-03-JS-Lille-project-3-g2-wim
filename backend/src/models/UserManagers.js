const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, firstname, name) values (?,?,?,?)`,
      [user.email, user.password, user.firstname, user.name]
    );
  }

  findOneByMail(mail) {
    return this.connection.query(
      `select * from ${UserManager.table} where email=?`,
      [mail]
    );
  }
}

module.exports = UserManager;
