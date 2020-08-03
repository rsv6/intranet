const router = require("express").Router();
const taskGerController = require("../controllers/taskGer");

router.get("/taskGer", taskGerController.get);
router.post("/taskGer", taskGerController.post);

module.exports = router;
