import express, {json, urlencoded} from 'express'
import routes from './routes/index.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'
import MongoStore from 'connect-mongo'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
app.use(
    session({
        secret:'matias',
        rolling: true,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongoUrl:
            "mongodb+srv://admin:asd123@cluster0.cehr9g6.mongodb.net/?retryWrites=true&w=majority",
            mongoOptions
        }),
        cookie:{
            maxAge: 600000
        }
    })
)
app.use(json())
app.use(urlencoded({extended: true}))


app.set('views', __dirname + '/views')
app.set("view engine", "ejs")

app.use(routes)

app.listen(3000, ()=>{
    console.log("Server listen in port 3000");
})