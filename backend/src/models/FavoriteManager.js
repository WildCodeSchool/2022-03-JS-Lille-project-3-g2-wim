const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "userFavLesson";

  insert(lessonId, userId) {
    return this.connection.query(
      `insert into userFavLesson ( lesson_id, user_id) values (?,?)`,
      [lessonId, userId]
    );
  }

  findAllFavorites(userId) {
    return this.connection.query(
      `SELECT lesson.id, lesson.fileName, lesson.schoolTopic_id, lesson.title, lesson.subTitle, lesson.musicStyle, lesson.fileLocation, lesson.lyrics, lesson.img, lesson.duration, lesson.schoolClass_id  FROM user INNER JOIN userFavLesson ON user.id=userFavLesson.user_id INNER JOIN lesson ON userFavLesson.lesson_id=lesson.id where user.id = ?
      `,
      [userId]
    );
  }

  delete(lessonId, userId) {
    return this.connection.query(
      `DELETE FROM userFavLesson WHERE lesson_id = ? AND user_id = ?`,
      [lessonId, userId]
    );
  }
}

module.exports = FavoriteManager;
