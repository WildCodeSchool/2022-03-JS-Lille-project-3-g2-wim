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

  findUser(id) {
    return this.connection.query(
      `select user.id, user.email, user.password, user.name, user.firstname, user.age, user.schoolOption, user.schoolName, user.schoolClass_id, user.avatar, sC.label, sC.id from  ${this.table} inner join schoolClass as sC on sC.id = user.schoolClass_id where user.id = ?`,
      [id]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, name, firstname, age,schoolOption, schoolName, schoolClass_id, avatar) values (?,?,?,?,?,?,?,?,?)`,
      [
        user.email,
        user.password,
        user.name,
        user.firstname,
        user.age,
        user.schoolOption,
        user.schoolName,
        user.schoolClass_id,
        user.avatar,
      ]
    );
  }
}

module.exports = UserManager;
