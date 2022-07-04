const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, user.id]
    );
  }

  findOneByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email=?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (schoolOption, schoolName, email, password, firstname, name, age, schoolClass_id) values (?,?,?,?,?,?,?,?)`,
      [
        user.shcoolOption,
        user.shcoolName,
        user.email,
        user.password,
        user.firstname,
        user.name,
        user.age,
        user.schoolClass_id,
      ]
    );
  }
}

module.exports = UserManager;
