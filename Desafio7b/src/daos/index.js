import { config } from "../config/config.js"
import { ProdMongoDao } from "./prodMongo.daos.js"
import { CarrMongoDaos } from "./carritoMongo.daos.js"

let ProdDao
let CarDao

if (config.database === "MONGO") {
  ProdDao = ProdMongoDao
  CarDao = CarrMongoDaos
} else {
  //   ProdDao = ProdFirebaseDao;
  //   CarDao = CarrFirebaseDao;
}

export const Daos = { ProdDao, CarDao }

