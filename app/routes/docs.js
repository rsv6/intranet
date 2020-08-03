const router = require("express").Router();
const docsController = require("../controllers/docs");

router.get("/docs", docsController.get);
router.post("/docs", docsController.post);

module.exports = router;