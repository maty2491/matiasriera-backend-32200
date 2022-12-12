const { response, request } = require('express')

const productos = [
    {
        id: 1,
        nombre: 'Guitarra Cort Z44',
        precio: 137922.75,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_632536-MLA48208174035_112021-O.webp'
    },
    {
        id: 2,
        nombre: 'Kit De Batería Electrónica Behringer Xd8usb 8 Piezas',
        precio: 174618.73,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_963956-MLA31621294374_072019-O.webp'
    },
    {
        id: 3,
        nombre: 'Bajo Eléctrico 4 Cuerdas Yamaha Trbx174bl',
        precio: 122886.64,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_728801-MLA46925273219_072021-O.webp'
    },
    {
        id: 4,
        nombre: 'Cabezal Para Guitarra Mesa Boogie Dual Rectifier',
        precio: 1119590,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_615676-MLA31593269319_072019-O.webp'
    },
    {
        id: 5,
        nombre: 'Caja Mesa Boogie 4x10 Traditional Power House Made In Usa',
        precio: 708484.76,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_615314-MLA48110054685_112021-O.webp'
    },
    {
        id: 6,
        nombre: 'Caja',
        precio: 15000,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_615314-MLA48110054685_112021-O.webp'
    }
]

const productoGet = (req = request, res = response) => {
    res.json({
        msg: 'get API - controlador mostrado',
        productos
    })
}

    const productosGet = (req = request, res = response) => {

        const { id } = req.params
        const producto = productos.find(producto => producto.id === Number(id))
        const response = producto ? { status: 'Ok', data: producto } : { Error: 'Producto no encontrado', data: null }
        const statusCode = producto ? 201 : 404
        res.status(statusCode).json(response)

        res.json({
            msg: 'get API - controlador mostrado',
            id,
            productos
        })
    }

    const productosPut = (req, res) => {
        const { id } = req.params
        const { nombre, precio, imagen } = req.body
        const actualizarProd = productos.find(producto => producto.id === Number(id))
        if (!actualizarProd) {
            return req.status(404).json({ status: "Not Found", data: null })
        }
        productos.splice(actualizarProd, 1, { nombre, precio, imagen })
        res.json({
            msg: 'put API - controlador actualizado',
            id,
            nombre,
            precio,
            imagen
        })
    }

    const productosPost = (req, res) => {

        const { nombre, precio, imagen } = req.body
        const newProdId = productos[productos.length - 1].id + 1
        const newProd = {
            id: newProdId,
            nombre,
            precio,
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
