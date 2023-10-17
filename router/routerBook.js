const { Router }  = require("express");

const UserController = require('../controllers/controllerBook');
const Controller = new UserController();

const router = Router(); 
router.get('/', Controller.getAllBooks);
router.get('/:id', Controller.getBook);

router.post('/', Controller.postBook);
router.patch('/:id', Controller.updateBook);
router.delete('/:id', Controller.deleteBook);

module.exports = router;