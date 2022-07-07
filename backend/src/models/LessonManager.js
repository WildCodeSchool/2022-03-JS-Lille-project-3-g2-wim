const AbstractManager = require("./AbstractManager");

class LessonManager extends AbstractManager {
  static table = "lesson";

  findTopic(id) {
    return this.connection.query(
      `select l.id, l.fileName, l.schoolTopic_id, l.title, l.subTitle, l.musicStyle, l.fileLocation, l.lyrics, l.img, l.duration, l.schoolClass_id, st.id, st.label, st.logo, st.icon from ${this.table} as l inner join schoolTopic as st on st.id = l.schoolTopic_id where l.id = ?`,
      [id]
    );
  }
}

module.exports = LessonManager;
