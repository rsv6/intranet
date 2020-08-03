const router = require("express").Router();
const sairController = require("../controllers/sair");

router.get("/sair", sairController.get);

module.exports = router;