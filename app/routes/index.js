const router = require("express").Router();
const indexController = require("../controllers/index");
//const docsController = require("../controllers/docs");
//const taskGerController = require("../controllers/taskGer");
//const ramaisRouter = require("../routes/ramais");

router.get('/', indexController.get);

//router.post('/', docsController.post);
//router.post('/', taskGerController.post);

//router.use('/', require('./produtos'));
//router.use('/', require('./login'));

router.use('/', require('./ramais'));
router.use('/', require('./calculaImpressoes'));
router.use('/', require('./chat'));
router.use('/', require("./contato"));


router.use('/', require('./taskGer'));
router.use('/', require('./docs'));
router.use('/', require('./docsVman'));
//router.use('/', require('./login_docs'));
router.use('/', require('./cadDocs'));

router.use('/', require('./sair'));

module.exports = router;
