const { Router }  = require("express");

const UserController = require('../controllers/controllerUser');
const Controller = new UserController();

const router = Router(); 
router.get('/', Controller.getAllUsers);
router.get('/:id', Controller.getUser);

router.post('/', Controller.postUser);
router.patch('/:id', Controller.updateUser);
router.delete('/:id', Controller.deleteUser);

module.exports = router;