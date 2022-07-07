const models = require("../models");

class ClassController {
  static browse = (req, res) => {
    models.schoolClass
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

module.exports = ClassController;
