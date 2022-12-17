const { response, request } = require('express')
const { productos} = require('../models/db.js')


const productoGet = async(req = request, res = response) => {
    
    res.json({
        msg: 'get API - controlador mostrado',
        productos
    })
}

const productosGet = (req = request, res = response) => {
    const { id } = req.params
    if(id){
        const producto = productos.find(producto => producto.id === Number(id))
        const response = producto ? { status: 'Ok', data: producto } : { Error: 'Producto no encontrado', data: null }
        const statusCode = producto ? 201 : 404
        res.status(statusCode).json(response)
    }else{
        res.json({
            msg: 'get API - controlador mostrado',
            id,
            productos
        })
    }
}

const productosPut = (req, res) => {
    const { id } = req.params
    const { nombre, precio, imagen } = req.body
    const actualizarProd = productos.find(producto => producto.id === Number(id))
    if (!actualizarProd) {
        return req.status(404).json({ status: "Not Found", data: null })
    }
    productos.splice(actualizarProd, 1, { codigo, nombre, descripcion, precio, stock, imagen })
    res.json({
        msg: 'put API - controlador actualizado',
        id,
        codigo,
        nombre,
        descripcion,
        precio,
        stock,
        imagen
    })
}

const productosPost = (req, res) => {

    const { nombre, precio, imagen } = req.body
    const newProdId = productos[productos.length - 1].id + 1
    const newProd = {
        id: newProdId,
        codigo,
        nombre,
        descripcion,
        precio,
        stock,
        imagen
    }

    res.json({
        msg: 'post API - controlador creado',
        newProd
    })
    productos.push(newProd)
}

const productosDelete = (req, res) => {
    const { id } = req.params
    const actualizarProd = productos.findIndex((producto) => producto.id === Number(id))
    const prodToDelete = productos[actualizarProd]
    if (!prodToDelete) {
        return req.status(404).json({ status: "Not Found", data: null })
    }
    productos.splice(actualizarProd, 1)
    res.json({
        msg: 'delete API - controlador',
        data: prodToDelete
    })
}

module.exports = {
    productoGet,
    productosGet,
    productosPut,
    productosPost,
    productosDelete
}
