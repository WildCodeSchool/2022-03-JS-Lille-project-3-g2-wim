const AbstractManager = require("./AbstractManager");

class TopicHaveLessonManager extends AbstractManager {
  static table = "activity";

  findAll() {
    return this.connection.query(
      `select distinct schoolTopic_id, label, icon from schoolTopic INNER JOIN lesson ON schoolTopic.id = lesson.schoolTopic_id`
    );
  }
}

module.exports = TopicHaveLessonManager;
