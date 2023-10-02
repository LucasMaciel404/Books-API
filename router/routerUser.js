const { Router }  = require("express");

const { getUsers, getUser, postUser, updateUser, deletUser } = require("../controllers/controllerUser");
const router = Router(); 
router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', postUser);
router.patch('/:id', updateUser);
router.delete('/:id', deletUser);

module.exports = router;