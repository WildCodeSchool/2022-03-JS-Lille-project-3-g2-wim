const models = require("../models");

class TopicHaveLessonController {
  static browse = (req, res) => {
    models.TopicHaveLesson.findAllTopicHaveLesson()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = TopicHaveLessonController;
