const express = require("express");

const {
  ItemController,
  LessonController,
  UserController,
  FavoriteController,
} = require("./controllers");

const router = express.Router();

router.delete("/users/:id", UserController.delete);

router.get("/favorite/:id", FavoriteController.readByUser);
router.post("/favorite", FavoriteController.addFavFromUser);
router.delete("/favorite/:id", FavoriteController.delete);

router.get("/lessons", LessonController.browse);
router.get("/lessons/:id", LessonController.read);
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
