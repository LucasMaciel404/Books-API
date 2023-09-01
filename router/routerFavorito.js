const { Router }  = require("express");

const { getFavoritos, postFavoritos, deletaFavorito } = require("./../controllers/controllerFavoritos");
const router = Router(); 
router.get('/', getFavoritos);

router.post('/', postFavoritos);
router.delete('/:id', deletaFavorito);

module.exports = router;

// post nao repetir