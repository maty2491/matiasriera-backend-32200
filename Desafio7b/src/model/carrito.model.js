import { model, Schema } from "mongoose";

const carroSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  stock: { type: String, required: true },  
  url: { type: String, required: true },
});

export const Carrito = model("carrito", carroSchema);