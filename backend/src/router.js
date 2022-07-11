const express = require("express");
const passport = require("passport");

const {
  ItemController,
  LessonController,
  AuthController,
  UserController,
  FavoriteController,
  TopicController,
  UserTopicController,
  TopicHaveLessonController,
  ClassController,
} = require("./controllers");

const router = express.Router();

router.delete("/users/:id", UserController.delete);
router.get("/favorite/:id", FavoriteController.readByUser);
router.post("/favorite", FavoriteController.addFavFromUser);
router.delete("/favorite/:id", FavoriteController.delete);
router.get("/lessons", LessonController.browse);
router.post("/lessons", LessonController.add);
router.put("/lessons/:id", LessonController.edit);
router.delete("/lessons/:id", LessonController.delete);
router.post("/auth/signup", AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);
router.get(
  "/secure/lessons",
  passport.authenticate("jwt", { session: false }),
  AuthController.lessons
);
router.get("/lessons/:id", LessonController.read);
router.get("/lessonsdata/:id", LessonController.readdata);
router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.get("/topics", TopicController.browse);
router.get("/not-empty-topics", TopicHaveLessonController.browse);
router.get("/usertopics/:id", UserTopicController.browse);
router.get("/topics/:id", TopicController.read);
router.put("/topics/:id", TopicController.edit);
router.post("/topics", TopicController.add);
router.delete("/topics/:id", TopicController.delete);
router.get("/schoolclass", ClassController.browse);
router.get("/schoolclass/:id", ClassController.read);
router.put("/schoolclass/:id", ClassController.edit);
router.delete("/schoolclass/:id", ClassController.delete);
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
module.exports = router;
