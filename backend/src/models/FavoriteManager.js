const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "userFavLesson";

  insert(lessonId, userId) {
    return this.connection.query(
      `insert into userFavLesson (user_id, lesson_id) values (?,?)`,
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
      `DELETE userFavLesson FROM userFavLesson $ WHERE lesson_id = ? AND user.id = ?`,
      [lessonId, userId]
    );
  }
}

module.exports = FavoriteManager;
