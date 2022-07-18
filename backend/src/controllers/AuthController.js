const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const { uploadImage } = require("../services/cloudinary");

class AuthController {
  static signup = async (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.CRYPT_ROUNDS, 10)
    );
    if (user.email !== /[\w_-]+@[\w-]+\.[a-z]{2,3}$/i) {
      res.status(418).res.send("Email incorrect");
    }
    const feedbackImg = await uploadImage(req.file.path);
    user.avatar = feedbackImg.secure_url;

    models.user
      .insert(user)
      .then(([result]) => {
        user.id = result.insertId;
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET);
        res.status(201).send({ user, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.status(200).json({ user: req.user, token });
  };

  static lessons = (req, res) => {
    return res.send("Yay <3");
  };
}

module.exports = AuthController;
