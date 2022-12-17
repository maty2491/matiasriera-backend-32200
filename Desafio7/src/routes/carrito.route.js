const { Router } = require('express')
const { generarCarrito, deleteCarrito, agregarProductoID, getCarritoById, deleteProductoById  } = require('../controllers/carrito')
const router = Router()

router.post("/", generarCarrito);
router.delete("/:id", deleteCarrito);
router.post("/:id/productos", agregarProductoID);
router.get("/:id/productos", getCarritoById);
router.delete("/:id/productos", deleteProductoById);

module.exports = router
