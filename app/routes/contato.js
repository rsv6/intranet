const router = require("express").Router();
const contatoController = require("../controllers/contato");
const docsController = require("../controllers/docs");

router.get("/contato", contatoController.get);
router.post("/contato", docsController.post);

module.exports = router;
