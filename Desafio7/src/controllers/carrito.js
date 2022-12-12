const { response, request } = require('express')

const carritoGet = (req = request, res = response) => {

    const { id } = req.query
    res.json({
        msg: 'get API - controlador',
        id
    })
}

const carritoPut = (req, res) => {
    const { id } = req.params
    res.json({
        msg: 'put API - controlador',
        id
    })
}

const carritoPost = (req, res) => {

    const { nombre, precio, imagen } = req.body
    res.json({
        msg: 'post API - controlador',
        nombre,
        precio,
        imagen
    })
}

const carritoDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    carritoGet,
    carritoPut,
    carritoPost,
    carritoDelete
}
