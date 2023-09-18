const { Router }  = require("express");

const { getFavorite, postFavorites, deletFavorite } = require("../controllers/controllerFavorite");
const router = Router(); 
router.get('/', getFavorite);

router.post('/:id', postFavorites);
router.delete('/:id', deletFavorite);

module.exports = router;