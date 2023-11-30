const { Router }  = require("express");

const LoginController = require('../controllers/controllerLogin');
const Controller = new LoginController();

const router = Router();

router.post('/Login', Controller.postLogin);
router.post('/Register', Controller.postRegister);

module.exports = router;