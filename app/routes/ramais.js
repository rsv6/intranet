const router = require("express").Router();
const ramaisController = require("../controllers/ramais");
const docsController = require("../controllers/docs");

router.get("/ramais", ramaisController.get);
router.post("/ramais", docsController.post);

module.exports = router;
