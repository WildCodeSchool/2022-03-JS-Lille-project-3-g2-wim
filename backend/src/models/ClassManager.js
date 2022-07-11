const AbstractManager = require("./AbstractManager");

class ClassManager extends AbstractManager {
  static table = "schoolClass";

  insert(item) {
    return this.connection.query(
      `insert into ${ClassManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ClassManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ClassManager;
