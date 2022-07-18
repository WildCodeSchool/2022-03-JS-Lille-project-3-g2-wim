const express = require("express");
const passport = require("passport");
const multer = require("multer");

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

const upload = multer({ dest: "./tmp/" });

const router = express.Router();

router.delete(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.delete
);
router.get(
  "/favorite",
  passport.authenticate("jwt", { session: false }),
  FavoriteController.readByUser
);
router.post(
  "/favorite",
  passport.authenticate("jwt", { session: false }),
  FavoriteController.addFavFromUser
);
router.delete(
  "/favorite/:id",
  passport.authenticate("jwt", { session: false }),
  FavoriteController.delete
);
router.get(
  "/lessons",
  passport.authenticate("jwt", { session: false }),
  LessonController.browse
);
router.post(
  "/lessons",
  passport.authenticate("jwt", { session: false }),
  LessonController.add
);
router.put(
  "/lessons/:id",
  passport.authenticate("jwt", { session: false }),
  LessonController.edit
);
router.delete(
  "/lessons/:id",
  passport.authenticate("jwt", { session: false }),
  LessonController.delete
);
router.post("/auth/signup", upload.single("avatar"), AuthController.signup);
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
router.get(
  "/lessons/:id",
  passport.authenticate("jwt", { session: false }),
  LessonController.read
);
router.get(
  "/lessonsdata/:id",
  passport.authenticate("jwt", { session: false }),
  LessonController.readdata
);
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.browse
);
router.get(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.read
);
router.put(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.edit
);
router.get(
  "/topics",
  passport.authenticate("jwt", { session: false }),
  TopicController.browse
);
router.get(
  "/not-empty-topics",
  passport.authenticate("jwt", { session: false }),
  TopicHaveLessonController.browse
);
router.get(
  "/usertopics/:id",
  passport.authenticate("jwt", { session: false }),
  UserTopicController.browse
);
router.get(
  "/topics/:id",
  passport.authenticate("jwt", { session: false }),
  TopicController.read
);
router.put(
  "/topics/:id",
  passport.authenticate("jwt", { session: false }),
  TopicController.edit
);
router.post(
  "/topics",
  passport.authenticate("jwt", { session: false }),
  TopicController.add
);
router.delete(
  "/topics/:id",
  passport.authenticate("jwt", { session: false }),
  TopicController.delete
);
router.get("/schoolclass", ClassController.browse);
router.get(
  "/schoolclass/:id",
  passport.authenticate("jwt", { session: false }),
  ClassController.read
);
router.put(
  "/schoolclass/:id",
  passport.authenticate("jwt", { session: false }),
  ClassController.edit
);
router.delete(
  "/schoolclass/:id",
  passport.authenticate("jwt", { session: false }),
  ClassController.delete
);
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
module.exports = router;
