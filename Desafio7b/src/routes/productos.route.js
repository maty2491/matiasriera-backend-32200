import { Router } from "express"
import { productosController } from '../controllers/productosController.js'
// import { obtenerProductos, obtenerProdById, agregarProducto, editarProducto, eliminarProducto, productosController  } from '../controllers/productosController.js'
import checkAuth from '../middleware/checkAdmin.js'


const router = Router()

router.get('/', productosController.obtenerProductos)
// router.get('/:id', obtenerProdById)
/*router.post('/', checkAuth, agregarProducto)
router.put('/:id', checkAuth, editarProducto)
router.delete('/:id', checkAuth, eliminarProducto) */

export const productosRouter = router

