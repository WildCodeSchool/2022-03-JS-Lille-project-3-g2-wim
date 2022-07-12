const models = require("../models");

class FavoriteController {
  static readByUser = (req, res) => {
    models.userFavLesson
      .findAllFavorites(req.user.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addFavFromUser = (req, res) => {
    // The lesson number to add a favorite is sent in a body from front
    const lessonId = req.body.lesson_id;
    const userId = req.user.id;

    // TODO validations (length, format...)

    models.userFavLesson
      .insert(lessonId, userId)
      .then(() => {
        res.status(201).send(req.body);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    const lessonId = req.params.id;
    const userId = req.user.id;

    models.userFavLesson
      .delete(lessonId, userId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FavoriteController;
