const AbstractManager = require("./AbstractManager");

class TopicHaveLessonManager extends AbstractManager {
  static table = "TopicHaveLesson";

  findAllTopicHaveLesson(userId) {
    return this.connection.query(
      `select distinct sT.label, sT.icon , l.schoolTopic_id
      from schoolTopic as sT
      INNER JOIN lesson as l ON sT.id = l.schoolTopic_id 
      INNER JOIN schoolClass as sC on l.schoolClass_id = sC.id
      INNER JOIN user as u ON u.schoolClass_id = sC.id
      where u.id = ?`,
      [userId]
    );
  }
}

module.exports = TopicHaveLessonManager;
