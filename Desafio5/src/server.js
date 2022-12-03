import express, { json, urlencoded } from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import routes from './routes/index.js'
import {engine} from 'express-handlebars'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(json())
app.use(urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("view engine", "pug")
app.set("view engine", "hbs")
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: join(__dirname, '/views/layouts/main.hbs'),
    layoutsDir: join(__dirname, '/views/layouts'),
    partialsDir: join(__dirname, '/views/partials'),
})
)

app.set('views', __dirname + '/views')

app.use('/', routes)

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})