import {Router} from "express"
import { carritoController } from "../controllers/carritoController.js"

const router = Router()

router.post("/", carritoController.generarCarrito)
router.delete("/:id", carritoController.deleteCarrito)
router.post("/:id/productos", carritoController.agregarProducto)
router.get("/:id/productos", carritoController.getCarritoById)

export const carritoRouter = router