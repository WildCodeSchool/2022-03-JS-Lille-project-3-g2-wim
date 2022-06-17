const AbstractManager = require("./AbstractManager");

class TopicManager extends AbstractManager {
  static table = "schoolTopic";

  findAllUserTopics(id) {
    return this.connection.query(
      `select schoolTopic.label from user INNER JOIN schoolClass ON schoolClass.id=user.schoolClass_id INNER JOIN lesson ON lesson.schoolClass_id=schoolClass.id INNER JOIN schoolTopic ON lesson.schoolTopic_id=schoolTopic.id where user.id = ?`,
      [id]
    );
  }
}

module.exports = TopicManager;
