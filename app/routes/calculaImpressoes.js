const router = require("express").Router();
const calculaImpressoesController = require("../controllers/calculaImpressoes");
const docsController = require("../controllers/docs");

router.get("/calculaImpressoes", calculaImpressoesController.get);
router.post("/calculaImpressoes", docsController.post);

module.exports = router;
