import { Daos } from "../daos/index.js"
import { Producto as ProdModel } from "../model/producto.model.js"

const Producto = new Daos.ProdDao(ProdModel)

const obtenerProductos = async (req, res) => {
    try {
        const response = await Producto.getAll()
        res.json(response)
    } catch (err) {
        throw new Error()
    }    
}

/* const obtenerProdById = async (req, res) => {
    const { id } = req.params
    if (id) {
        const producto = productos.find(producto => producto.id === Number(id))
        const response = producto ? { status: 'Ok', data: producto } : { Error: 'Producto no encontrado', data: null }
        const statusCode = producto ? 201 : 404
        res.status(statusCode).json(response)
    } else {
        res.json({
            msg: 'get API - controlador mostrado',
            id,
            productos
        })
    }
} */

/* const agregarProducto = async (req, res) => {
    const { name, id, description, code, url, price, stock } = req.body
    const date = getTime()
    productos.push({ name, id, description, code, url, price, stock, date })
    res.json(productos)
} */

/* const editarProducto = async (req, res) => {

    const { id } = req.params
    try {
        const editarProducto = productos.find((producto) => producto.id === Number(id))
        const index = productos.indexOf(editarProducto);
        if (!editarProducto) {
            res.status(404).json({ message: "Producto no encontrado" })
        }
        else {
            const { name, id, description, code, url, price, stock } = req.body
            const date = getTime()
            productos[index] = { name, id, description, code, url, price, stock, date }
            res.json(productos[index])
        }
    } catch (error) {
        res.status(404).json({ message: "error" })
    } 
} */

/* const eliminarProducto = async (req, res) => {
    const { id } = req.params
    try {
        const productoFind = productos.find((producto) => producto.id === Number(id))
        if (!productoFind) {
            res.status(404).json({ message: "Producto no encontrado" })
        }
        else {
            const index = productos.indexOf(productoFind)
            productos.splice(index, 1)
            res.json(productos)
        }
    }
    catch (error) {
        res.status(404).json({ message: "error" })
    }
} */

export const productosController = { obtenerProductos }

//, obtenerProdById, agregarProducto, editarProducto, eliminarProducto