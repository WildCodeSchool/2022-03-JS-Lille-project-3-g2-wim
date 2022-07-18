const fs = require("fs");
const { v4: uuid } = require("uuid");

const uploadAndRename = (req, res, next) => {
  const fileName = `${uuid()}.mp3`;
  const relativePath = `public/uploads/${fileName}`;
  const absolutePath = `${req.protocol}://${req.get(
    "host"
  )}/uploads/${fileName}`;

  fs.rename(req.file.path, relativePath, (err) => {
    if (err) throw err;
  });
  req.body.filePath = absolutePath;
  next();
};

module.exports = { uploadAndRename };
