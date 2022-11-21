import { Router } from "express"
import uploadFileMiddleware from "../libs/multer.js"

const router = Router()
const productos = [
    {
        id: 1,
        title: 'Guitarra Cort Z44',
        price: 137922.75,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_632536-MLA48208174035_112021-O.webp'
    },
    {
        id: 2,
        title: 'Kit De Batería Electrónica Behringer Xd8usb 8 Piezas',
        price: 174618.73,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_963956-MLA31621294374_072019-O.webp'
    },
    {
        id: 3,
        title: 'Bajo Eléctrico 4 Cuerdas Yamaha Trbx174bl',
        price: 122886.64,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_728801-MLA46925273219_072021-O.webp'
    },
    {
        id: 4,
        title: 'Cabezal Para Guitarra Mesa Boogie Dual Rectifier',
        price: 1119590,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_615676-MLA31593269319_072019-O.webp'
    },
    {
        id: 5,
        title: 'Caja Mesa Boogie 4x10 Traditional Power House Made In Usa',
        price: 708484.76,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_615314-MLA48110054685_112021-O.webp'
    }
]

router.route('/').get((req, res) => {
    const response = {
        status: "Ok",
        data: productos,
    }
    res.json(response)
})

    .post(uploadFileMiddleware.single("thumbnail"), (req, res) => {
        const { title, price } = req.body
        const thumbnail = req.file
        const newProdId = productos[productos.length - 1].id + 1

        const newProd = {
            id: newProdId,
            title,
            price,
            thumbnail: `https://localhost:8080/images/${thumbnail.originalname}`,
        }
        const response = {
            status: "Creado",
            data: newProd,
        }

        productos.push(newProd)

        res.status(201).json(response)
    })

router
    .route('/:id')
    .put((req, res) => {
        const { id } = req.params
        const { title, price } = req.body
        const prodToUpdateIndex = productos.find(producto => producto.id === Number(id))
        if (!prodToUpdateIndex) {
            return req.status(404).json({ status: "Not Found", data: null })
        }
        productos.splice(prodToUpdateIndex, 1, { id, title, price })
        res.status(200).json({
            status: "Updated",
            data: { id, title, price },
        })
    })
    .delete((req, res) => {
        const { id } = req.params
        const prodToUpdateIndex = productos.findIndex((producto) => producto.id === Number(id))
        const prodToDelete = productos(prodToUpdateIndex)
        if (!prodToDelete) {
            return req.status(404).json({ status: "Not Found", data: null })
        }
        productos.splice(prodToUpdateIndex, 1)
        res.status(200).json({
            status: "Deleted",
            data: prodToDelete,
        })
    })
    .get((req, res) => {
        const { id } = req.params
        const producto = productos.find(producto => producto.id === Number(id))
        const response = producto ? { status: 'Ok', data: producto } : { Error: 'Producto no encontrado', data: null }
        const statusCode = producto ? 201 : 404

        res.status(statusCode).json(response)

    })

export default router