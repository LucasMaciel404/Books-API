const { Router }  = require("express");

const UserController = require('../controllers/controllerUser');
const Controller = new UserController();

const router = Router();

router.post('/Login', Controller.postLogin);
router.post('/Register', Controller.postRegister);
router.get('/emailUser', Controller.getUserByEmail);

module.exports = router;