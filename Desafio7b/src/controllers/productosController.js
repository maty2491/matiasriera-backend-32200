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

 const obtenerProdById = async (req, res) => {
    const { id } = req.params
    try {
        const response = await Producto.getById(id)
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

 const editarProducto = async (req, res) => {

    const { id } = req.params
    try {
        const response = await Producto.update(id, req.body)
        res.json(response)
    } catch (err) {
        throw new Error()
    }   
} 

 const eliminarProducto = async (req, res) => {
    const { id } = req.params
    try {
        const response = await Producto.delete(id)
        res.json(response)
    } catch (err) {
        throw new Error()
    }   
} 

export const productosController = { obtenerProductos, obtenerProdById, agregarProducto, editarProducto, eliminarProducto }
