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
}

module.exports = TopicManager;
