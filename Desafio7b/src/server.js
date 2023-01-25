import express, { json } from 'express'
import mongoose from "mongoose"
import routes from './routes/index.js'
import {config} from "./config/config.js"

const app = express()
app.use(json())

app.use("/api", routes)

mongoose.connect("mongodb+srv://admin:admin123@cluster0.cehr9g6.mongodb.net/test").then(()=>{
    console.log("Database connected")
    
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

