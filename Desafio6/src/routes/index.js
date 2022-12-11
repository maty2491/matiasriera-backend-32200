import { Router } from "express"

const router = Router()

const products = [{
    title: "Excel",
    price: 100,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_excel-512.png"
}]

router.get('/', (req, res) => {
    res.render('partials/formProducto.hbs', { products })
})


router.post('/', (req, res) => {
    const { title, price, thumbnail } = req.body
    products.push({ title, price, thumbnail })
    res.redirect('/')
})

export default router