import { faker } from "@faker-js/faker"
faker.locale='es'

const getTestData = (req, res) =>{
    const response = []
    const qty = req.query.cant ? Number(req.query.cant) : 5

    for(let i = 1; i <=qty; i++){
        response.push({
            id: i,
            nombre: faker.commerce.product(),
            codigo: faker.random.numeric(),
            descripcion: faker.commerce.productDescription(),
            precio: faker.commerce.price(),
            stock: faker.random.numeric(),
            fecha: faker.date.recent(),
            url: faker.image.imageUrl()
        })
    }
    res.json(response)
}


export const testController = {getTestData}