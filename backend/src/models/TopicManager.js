const AbstractManager = require("./AbstractManager");

class TopicManager extends AbstractManager {
  static table = "schoolTopic";

  update(schoolTopic) {
    return this.connection.query(
      `update ${TopicManager.table} set ? where id = ?`,
      [schoolTopic, schoolTopic.id]
    );
  }

  insert(schoolTopic) {
    return this.connection.query(
      `insert into ${TopicManager.table} (label, logo) values (?, ?)`,
      [schoolTopic.label, schoolTopic.logo]
    );
  }

  findAllUserTopics(id) {
    return this.connection.query(
      `select schoolTopic.label from user INNER JOIN schoolClass ON schoolClass.id=user.schoolClass_id INNER JOIN lesson ON lesson.schoolClass_id=schoolClass.id INNER JOIN schoolTopic ON lesson.schoolTopic_id=schoolTopic.id where user.id = ?`,
      [id]
    );
  }

  //   Select schoolTopic.label
  // from user
  // INNER JOIN schoolClass ON schoolClass.id=user.schoolClass_id
  // INNER JOIN lesson ON lesson.schoolClass_id=schoolClass.id
  // INNER JOIN schoolTopic ON lesson.schoolTopic_id=schoolTopic.id
}

module.exports = TopicManager;
