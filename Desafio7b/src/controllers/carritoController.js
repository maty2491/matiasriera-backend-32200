import { Daos } from "../daos/index.js"
import { Carrito as CarModel } from "../model/carrito.model.js"

const Carrito = new Daos.CarDao(CarModel)

const generarCarrito = async (req, res) => {
    try {
        const response = await Carrito.getAll()
        res.json(response)
    } catch (err) {
        throw new Error()
    }   
}

const deleteCarrito = async (req, res) => {

    const { id } = req.params
    try {
        const response = await Producto.delete(id)
        res.json(response)
    } catch (err) {
        throw new Error()
    }   
}

const agregarProducto = async (req, res) => {
    
    try {
        const response = await Producto.create(req.body)
        res.json(response)
    } catch (err) {
        throw new Error()
    }    
}


const getCarritoById = async (req, res) => {
    const { id } = req.params
    try {
        const response = await Producto.getById(id)
        res.json(response)
    } catch (err) {
        throw new Error()
    }   
}


export const carritoController = { generarCarrito, deleteCarrito, agregarProducto, getCarritoById }