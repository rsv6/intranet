const router = require("express").Router();
const chatController = require("../controllers/chat");
const docsController = require("../controllers/docs");

router.get("/chat", chatController.get);
router.post("/chat", docsController.post);

module.exports = router;
