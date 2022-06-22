const express = require("express");
const passport = require("passport");

const {
  ItemController,
  LessonController,
  AuthController,
  UserController,
  TopicController,
  UserTopicController,
} = require("./controllers");

const router = express.Router();

// routes lessons
router.get("/lessons", LessonController.browse);

//  auth routes
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
router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.get("/topics", TopicController.browse);
router.get("/usertopics/:id", UserTopicController.browse);

// temporary road before authentification
router.get("/topics/:id", TopicController.read);
router.put("/topics/:id", TopicController.edit);
router.post("/topics", TopicController.add);
router.delete("/topics/:id", TopicController.delete);

// items routes by default
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
module.exports = router;
