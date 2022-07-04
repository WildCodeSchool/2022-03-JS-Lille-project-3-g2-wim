const AbstractManager = require("./AbstractManager");

class LessonManager extends AbstractManager {
  static table = "lesson";

  findTopic(id) {
    return this.connection.query(
      `select * from  ${this.table} inner join schoolTopic on schoolTopic.id = lesson.schoolTopic_id where lesson.id = ?`,
      [id]
    );
  }
}

module.exports = LessonManager;
