const router = require("express").Router();
const cadDocsController = require("../controllers/cadDocs");

router.get('/docs2', cadDocsController.get);
router.post('/cadDocs', cadDocsController.post);

module.exports = router;
