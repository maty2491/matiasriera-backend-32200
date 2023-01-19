import { Producto } from "../model/producto.model.js"
import { MongoDao } from "./mongo.daos.js"

export class ProdMongoDao extends MongoDao {
    constructor(){
    super(Producto)
}
}

