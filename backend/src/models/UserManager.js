const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, user.id]
    );
  }

  findOneByMail(mail) {
    return this.connection.query(
      `select * from ${UserManager.table} where email=?`,
      [mail]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, firstname, name) values (?,?,?,?)`,
      [user.email, user.password, user.firstname, user.name]
    );
  }
}

module.exports = UserManager;
