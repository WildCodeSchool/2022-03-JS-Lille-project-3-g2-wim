const AbstractManager = require("./AbstractManager");

class LessonManager extends AbstractManager {
  static table = "lesson";

  update(lesson) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      lesson,
      lesson.id,
    ]);
  }

  // Admin route only work with select *
  findTopic(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findTopicData(id) {
    return this.connection.query(
      `select lesson.fileName, schoolTopic.id, schoolTopic.logo, schoolTopic.label, lesson.title, lesson.musicStyle, lesson.fileLocation, lesson.duration, schoolClass.id, schoolClass.label from  ${LessonManager.table} inner join schoolTopic on schoolTopic.id = lesson.schoolTopic_id inner join schoolClass on schoolClass.id = lesson.schoolClass_id where lesson.id = ?`,
      [id]
    );
  }

  insert(lesson) {
    return this.connection.query(
      `insert into ${LessonManager.table} (fileName, schoolTopic_id, title, subTitle, musicStyle, fileLocation, lyrics, img, duration, schoolClass_id) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        lesson.fileName,
        lesson.schoolTopic_id,
        lesson.title,
        lesson.subTitle,
        lesson.musicStyle,
        lesson.fileLocation,
        lesson.lyrics,
        lesson.img,
        lesson.duration,
        lesson.schoolClass_id,
      ]
    );
  }
}

module.exports = LessonManager;
