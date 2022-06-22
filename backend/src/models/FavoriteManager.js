const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "userFavLesson";

  insert(numberLessonId, userLessonId) {
    return this.connection.query(
      `insert into userFavLesson (user_id, lesson_id) values (?,?)`,
      [userLessonId, numberLessonId]
    );
  }

  findAllFavorites(id) {
    return this.connection.query(
      `select lesson.* from user INNER JOIN userFavLesson ON user.id=userFavLesson.user_id INNER JOIN lesson ON userFavLesson.lesson_id=lesson.id where user.id = ?`,
      [id]
    );
  }

  delete(numberLessonId, userLessonId, id) {
    return this.connection.query(
      `delete userFavLesson from userFavLesson INNER JOIN user ON userFavLesson.user_id=user.id WHERE user_id = ? AND lesson_id = ? AND user.id = ?`,
      [userLessonId, numberLessonId, id]
    );
  }
}

module.exports = FavoriteManager;
