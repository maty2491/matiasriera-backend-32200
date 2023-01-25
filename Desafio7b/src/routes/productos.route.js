import { Router } from "express"
import { productosController } from '../controllers/productosController.js'

const router = Router()

router.get('/', productosController.obtenerProductos)
router.get('/:id', productosController.obtenerProdById)
router.post('/', productosController.agregarProducto)
router.put('/:id', productosController.editarProducto)
router.delete('/:id', productosController.eliminarProducto)

export const productosRouter = router

