const models = require("../models");

class TopicController {
  static browse = (req, res) => {
    models.schoolTopic
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.schoolTopic
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const schoolTopic = req.body;

    // TODO validations (length, format...)

    schoolTopic.id = parseInt(req.params.id, 10);

    models.schoolTopic
      .update(schoolTopic)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const schoolTopic = req.body;

    // TODO validations (length, format...)

    models.schoolTopic
      .insert(schoolTopic)
      .then(([result]) => {
        res.status(201).send({ ...schoolTopic, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    const schoolTopic = req.body;
    schoolTopic.id = parseInt(req.params.id, 10);
    models.schoolTopic
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = TopicController;
