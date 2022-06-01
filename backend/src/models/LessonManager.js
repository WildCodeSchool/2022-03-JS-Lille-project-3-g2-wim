const AbstractManager = require("./AbstractManager");

class LessonManager extends AbstractManager {
  static table = "lesson";

  findAll() {
    return this.connection.query(`select * from  ${LessonManager.table}`);
  }
}

module.exports = LessonManager;
