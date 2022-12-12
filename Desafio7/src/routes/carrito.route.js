const { Router } = require('express')
const { carritoGet, carritoPut, carritoPost, carritoDelete } = require('../controllers/carrito')
const router = Router()

router.get('/:id?', carritoGet)
router.put('/:id', carritoPut)
router.post('/', carritoPost)
router.delete('/:id', carritoDelete)

module.exports = router