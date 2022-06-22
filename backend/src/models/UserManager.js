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
      `insert into ${UserManager.table} (email, password, firstname, name, age, phoneNumber, schoolOption, schoolName, country, city, schoolClass_id) values (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        user.email,
        user.password,
        user.firstname,
        user.name,
        user.age,
        user.phoneNumber,
        user.shcoolOption,
        user.shcoolName,
        user.country,
        user.city,
        user.schoolClass_id,
      ]
    );
  }
}

module.exports = UserManager;
