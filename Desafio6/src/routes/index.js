import { Router } from "express";

const router = Router()
const products = [
    {
        id:1,
        name: "Excel",
        price: 100,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_excel-512.png"
    }
]

router.get("/", (req, res) => {
    /* const { id } = req.params
    const products = products.find((product) => product.id === Number(id)) */
    res.render("/", {products})
})

export default router