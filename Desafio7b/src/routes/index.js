import { Router } from "express"
import { carritoRouter } from "./carrito.route.js"
import { productosRouter } from "./productos.route.js"

const router = Router()

router.use('/productos', productosRouter)
router.use('/carrito', carritoRouter)

export default router