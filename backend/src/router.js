const express = require("express");

const { ItemController, LessonController } = require("./controllers");

const router = express.Router();

router.get("/lessons", LessonController.browse);
router.get("/items", ItemController.browse);
router.get("/lessons/:id", LessonController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
