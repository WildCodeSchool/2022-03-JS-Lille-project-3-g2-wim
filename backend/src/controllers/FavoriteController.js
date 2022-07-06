const models = require("../models");

class FavoriteController {
  static readByUser = (req, res) => {
    models.userFavLesson
      .findAllFavorites(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addFavFromUser = (req, res) => {
    const lessonId = req.body.lesson_id;
    const userId = req.body.user_id;

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
    models.userFavLesson
      .delete(lessonId)
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
