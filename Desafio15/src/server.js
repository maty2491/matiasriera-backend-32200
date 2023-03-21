import express from "express";
import logger from "./logger.js";
import router from "./routes/index.js";
import compression from "compression";
import cluster from 'cluster'
import { cpus } from 'os'
import crypto  from "crypto"
const users = {}

const app = express();

app.get("/getUsers", (req, res) => {
  res.json({ users });
});

app.get("/newUser", (req, res) => {
  let username = req.query.username || "";
  const password = req.query.password || "";

  username = username.replace(/[!@#$%^&*]/g, "");

  if (!username || !password || users[username]) {
    return res.sendStatus(400);
  }

  const salt = crypto.randomBytes(128).toString("base64");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  users[username] = { salt, hash };

  res.sendStatus(200);
});

app.get("/auth-bloq", (req, res) => {
  let username = req.query.username || "";
  const password = req.query.password || "";

  username = username.replace(/[!@#$%^&*]/g, "");

  if (!username || !password || !users[username]) {
    // process.exit(1)
    return res.sendStatus(400);
  }

  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    // process.exit(1)
    res.sendStatus(401);
  }
});

app.get("/auth-nobloq", (req, res) => {
  let username = req.query.username || "";
  const password = req.query.password || "";

  username = username.replace(/[!@#$%^&*]/g, "");

  if (!username || !password || !users[username]) {
    // process.exit(1)
    return res.sendStatus(400);
  }

  crypto.pbkdf2(
    password,
    users[username].salt,
    10000,
    512,
    "sha512",
    (err, hash) => {
      if (users[username].hash.toString() === hash.toString()) {
        res.sendStatus(200);
      } else {
        // process.exit(1)
        res.sendStatus(401);
      }
    }
  );
});

const PORT = parseInt(process.argv[2]) || 8080
const modoCluster = process.argv[3] == 'CLUSTER'
if (modoCluster && cluster.isPrimary) {
  const numCPUs = cpus().length

  console.log(`Número de procesadores: ${numCPUs}`)
  console.log(`PID MASTER ${process.pid}`)

  for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
  }

  cluster.on('exit', worker => {
      console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
      cluster.fork()
  })
} else {
  const app = express()

  app.get('/', (req, res) => {
      const primes = []
      const max = Number(req.query.max) || 1000
      for (let i = 1; i <= max; i++) {
          if (isPrime(i)) primes.push(i)
      }
      res.json(primes)
  })

  app.listen(PORT, () => {
      console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
  })
}
function isPrime(num) {
  if ([2, 3].includes(num)) return true;
  else if ([2, 3].some(n => num % n == 0)) return false;
  else {
      let i = 5, w = 2;
      while ((i ** 2) <= num) {
          if (num % i == 0) return false
          i += w
          w = 6 - w
      }
  }
  return true
}

app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
});

app.use(compression())

app.use("/api", router);

app.use((req, res, next) => {
  logger.warn({ method: req.method, url: req.url });

  res.status(404).send("Not found :(");
});

app.listen(3000, () => {
  logger.info("Server listening port 3000");
});


//artillery quick --count 100 -n 20 http://localhost:8081?max=100000 > result_fork.txt
//artillery quick --count 100 -n 20 http://localhost:8081?max=100000 > result_cluster.txt


// curl -X GET "http://localhost:8080/newUser?username=matias&password=1234"
// otro usuario no bloq curl -X GET "http://localhost:8080/newUser?username=gabriel&password=1234"

//artillery quick --count 10 -n 50 "http://localhost:8080/auth-bloq?username=matias&password=1234" > result_bloq.txt
//artillery quick --count 10 -n 50 "http://localhost:8080/auth-nobloq?username=gabriel&password=1234" > result_no_bloq.txt

// Es mas eficiente el no-bloqueante que el bloqueante

