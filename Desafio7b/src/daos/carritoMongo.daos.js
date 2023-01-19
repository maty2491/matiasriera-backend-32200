import { MongoDao } from "./mongo.daos.js"
import { Carrito } from "../model/carrito.model.js"

export class CarrMongoDaos extends MongoDao {
    constructor(){
    super(Carrito)
}
}