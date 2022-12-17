const { Router } = require('express')
const { productosGet, productosPut, productosPost, productosDelete } = require('../controllers/productos')
const router = Router()

router.get('/:id?', productosGet )
router.put('/:id', productosPut)
router.post('/', productosPost)
router.delete('/:id', productosDelete)

module.exports = router