import express, { json, urlencoded } from 'express'
import prodRouter from "./routes/productos.js"
import baseRouter from "./routes/base.route.js"
import { fileURLToPath } from "url"
import { dirname } from "path"
import path from "path"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(json())
app.use(urlencoded({ extended: true }))
app.use("/images", express.static(path.join(__dirname + '/uploads')))

app.use((req, res, next) => {
    console.log(`X ${req.method} - ${req.path}`);
    next()
})

app.use("/api/productos", prodRouter)
app.use("/", baseRouter)

app.listen(8080, (error) => {
    if (error) {
        console.log('Error al iniciar la app', error);
    } else {
        console.log("Servidor listo en puerto 8080");
    }
})