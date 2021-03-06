const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const { uploadImage } = require("../services/cloudinary");

class AuthController {
  static signup = async (req, res) => {
    const user = req.body;
    const userEmail = user.email;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    // TODO validations (length, format...)
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.CRYPT_ROUNDS, 10)
    );
    if (user.avatar !== "") {
      const feedbackImg = await uploadImage(req.file.path);
      user.avatar = feedbackImg.secure_url;
    }

    if (userEmail.match(regexEmail)) {
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
    } else {
      res.status(400).send("Email incorrect");
    }
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
