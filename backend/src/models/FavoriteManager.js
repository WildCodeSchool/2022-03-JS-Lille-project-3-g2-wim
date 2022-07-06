const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "userFavLesson";

  // HEre the user_id is defined in code in frontend, waiting for authentification. To be changed after authentification implemented
  insert(numberLessonId, userLessonId) {
    return this.connection.query(
      `insert into userFavLesson ( lesson_id, user_id) values (?,?)`,
      [numberLessonId, userLessonId]
    );
  }

  findAllFavorites(id) {
    return this.connection.query(
      `select lesson.* from user INNER JOIN userFavLesson ON user.id=userFavLesson.user_id INNER JOIN lesson ON userFavLesson.lesson_id=lesson.id where user.id = ?`,
      [id]
    );
  }

  // Temporary road waiting for authentification : all favorites are managed on user 2. To be changed after authentification implemented
  delete(id) {
    return this.connection.query(
      `delete from userFavLesson WHERE user_id = 2 AND lesson_id = ?`,
      [id]
    );
  }
}

module.exports = FavoriteManager;
