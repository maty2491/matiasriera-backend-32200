import { model, Schema } from "mongoose"

const prodSchema = new Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },  
  url: { type: String, required: true },
})

export const Producto = model("producto", prodSchema)
