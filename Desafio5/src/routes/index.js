import { Router } from "express"

const router = Router()
const products = [{
    name: "Windows",
    price: 100,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_excel-512.png"
}]

 router.get("/ejs", (req, res) => {
    res.render('productForm.ejs')
})
router.get('/productosejs', (req, res) => {
    res.render('productos.ejs', { products })
})
router.post('/productosejs', (req, res) => {
    const { name, price, thumbnail } = req.body
    products.push({ name, price, thumbnail })
    res.redirect('/ejs')
}) 


router.get("/pug", (req, res) => {
    res.render('productForm.pug')
}) 
router.get('/productospug', (req, res) => {
    res.render('productos.pug', { products })
}) 
router.post('/productospug', (req, res) => {
    const { name, price, thumbnail } = req.body
    products.push({ name, price, thumbnail })
    res.redirect('/pug')
})


router.get("/hbs", (req, res) => {
    res.render('partials/productForm.hbs')
})
router.get('/productoshbs', (req, res) => {
    res.render('partials/productos.hbs', { products })
})

router.post('/productoshbs', (req, res) => {
    const { name, price, thumbnail } = req.body
    products.push({ name, price, thumbnail })
    res.redirect('/hbs')
})


export default router