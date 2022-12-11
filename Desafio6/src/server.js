import express, { json, urlencoded } from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import routes from './routes/index.js'
import { engine } from 'express-handlebars'
import { Server as IOServer } from 'socket.io'
import fs from "fs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
const products = []

const expressServer = app.listen(3000, () => {
    console.log("Server listening on port 8080");
})

const io = new IOServer(expressServer)
const messages = []

io.on('connection', (socket) => {
    console.log(`New connection established, socket ID: ${socket.id}`);
    socket.emit('server:message')
    socket.on('client:message', (messageInfo) => {
        messages.push(messageInfo)
        io.emit('server:message', messages)
        fs.writeFileSync("./chat.txt", JSON.stringify(messages))
        
    })
})

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
