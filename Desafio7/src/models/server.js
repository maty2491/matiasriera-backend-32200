const express = require('express')

class Server {
    constructor() {
        this.app = express()

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicacion
        this.routes()
        
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use('/api/productos', require('../routes/productos.route.js'))
        //this.app.use('/api/carrito'), require('../routes/carrito.route.js')
    }    

    listen() {
        this.app.listen(3000, () => {
            console.log("Server listening on port 3000");
        })
    }
}

module.exports = Server