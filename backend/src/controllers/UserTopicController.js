const models = require("../models");

class UserTopicController {
  static browse = (req, res) => {
    models.schoolTopic
      .findAllUserTopics(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserTopicController;
