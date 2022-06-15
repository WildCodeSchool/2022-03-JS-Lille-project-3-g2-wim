const express = require("express");

const {
  ItemController,
  LessonController,
  UserController,
  TopicController,
} = require("./controllers");

const router = express.Router();

router.get("/lessons", LessonController.browse);
router.get("/lessons/:id", LessonController.read);

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);

router.get("/topics", TopicController.browse);
router.get("/topics/:id", TopicController.read);
router.put("/topics/:id", TopicController.edit);
router.post("/topics", TopicController.add);
router.delete("/topics/:id", TopicController.delete);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
