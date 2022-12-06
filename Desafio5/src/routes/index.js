import { Router } from "express"

const router = Router()
const products = []

router.get("/", (req, res) => {
    res.render('productForm.ejs')
}) 

/* router.get("/pug", (req, res) => {
    res.render('productForm.pug')
}) 

router.get("/hbs", (req, res) => {
    res.render('productForm.hbs')   
}) */

router.get('/productosejs', (req, res) => {        
    res.render('productos.ejs', {products})
})

/* router.get('/productospug', (req, res) => {

    res.render('productos.pug', { products })
})

router.get('/productoshbs', (req, res) => {
    res.render('productos.hbs', {products})   
}) */

router.post('/productosejs', (req, res) => {
    const { name, price, thumbnail } = req.body
    products.push({ name, price, thumbnail })
    res.redirect('/')
})

export default router