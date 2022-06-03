const models = require("../models");

class LessonController {
  static browse = (req, res) => {
    models.lesson
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LessonController;
