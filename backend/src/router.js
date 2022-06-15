const express = require("express");
const passport = require("passport");

const {
  ItemController,
  LessonController,
  AuthController,
} = require("./controllers");

const router = express.Router();

// get routes /lessons

router.get("/lessons", LessonController.browse);

//  auth routes

router.post("/auth/signup", AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local"),
  AuthController.login
);

router.get(
  "/secure/ponies",
  passport.authenticate("jwt"),
  passport.authenticate("jwt", { session: false }),
  AuthController.ponies
);
// items routes by default

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
module.exports = router;
