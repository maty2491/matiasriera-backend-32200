import MongoStore from "connect-mongo"
import express, { json, urlencoded } from "express";
import expHbs from "express-handlebars";
import session from "express-session";
import { configObject } from "./config/index.js";
import router from "./routes/index.js";
import mongoose from "mongoose"
import passport from "passport"
import { passportStrategies } from "./lib/passport.lib.js"
import { User } from "./models/user.model.js"
import { authMiddlewares } from "./middlewares/auth.middleware.js"
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import  engine  from "express-handlebars";


const __dirname = dirname(fileURLToPath(import.meta.url)); 
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views/layouts"));
app.use(json());
app.use(urlencoded({ extended: true }));
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    rolling: true,
    secret: "coderhouse",
    store: new MongoStore({
      mongoUrl: configObject.mongoUrl,
      mongoOptions      
    }),
    cookie: {
      maxAge: 60000, // Cuanto queremos que dure la sesion
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use("login", passportStrategies.loginStrategy);
passport.use("register", passportStrategies.registerStrategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((data) => {
      done(null, data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.engine(".hbs", expHbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

app.use("/", router);
app.use(authMiddlewares.invalidUrl);

app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "main.html",
      layoutsDir: join(__dirname, "/views/layouts"),
      partialsDir: join(__dirname, "/views/partials"),
    })
  );

  app.set("view engine", "hbs");
  app.set("views", join(__dirname, "/views"));

mongoose.set("strictQuery", true);
mongoose.connect(
    "mongodb+srv://admin:asd123@cluster0.cehr9g6.mongodb.net/?retryWrites=true&w=majority",
  console.log("database connected")
);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});