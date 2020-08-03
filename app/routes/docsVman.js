const router = require("express").Router();
const docsVmanController = require('../controllers/docsVman');

router.get('/docs/vman', docsVmanController.get);

module.exports = router;