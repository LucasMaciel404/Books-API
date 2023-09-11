const { Router }  = require("express");

const { getBooks, getBook, postBook, updateBook, deletBook } = require("./../controllers/controllerBook");
const router = Router(); 
router.get('/', getBooks);
router.get('/:id', getBook);

router.post('/', postBook);
router.patch('/:id', updateBook);
router.delete('/:id', deletBook);

module.exports = router;

// post nao repetir