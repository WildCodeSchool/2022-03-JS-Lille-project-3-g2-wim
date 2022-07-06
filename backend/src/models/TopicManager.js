const AbstractManager = require("./AbstractManager");

class TopicManager extends AbstractManager {
  static table = "schoolTopic";

  findAll() {
    return this.connection.query(
      `select * from schoolTopic INNER JOIN lesson ON schoolTopic.id = lesson.schoolTopic_id`
    );
  }

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
}

module.exports = TopicManager;
