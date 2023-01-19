import {Router} from "express"
import { generarCarrito, deleteCarrito, agregarProductoID, getCarritoById, deleteProductoById } from "../controllers/carritoController.js"

const router = Router()

router.post("/", generarCarrito)
router.delete("/:id", deleteCarrito)
router.post("/:id/productos", agregarProductoID)
router.get("/:id/productos", getCarritoById)
router.delete("/:id/productos", deleteProductoById)

export const carritoRouter = router