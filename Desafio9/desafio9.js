use ecommerce

db.createCollection('mensajes')
db.createCollection('productos')
// 1 y 2
db.productos.insertMany([{ nombre: 'Manhunt', precio: 120, stock: 10 }, { nombre: 'Cuphead', precio: 580, stock: 4 }, { nombre: 'V-Rising', precio: 900, stock: 15 }, { nombre: 'DOOM Eternal', precio: 1280, stock: 10 }, { nombre: 'Resident Evil 3', precio: 1700, stock: 3 }, { nombre: 'Nioh 2', precio: 2300, stock: 7 }, { nombre: 'Crash Bandicoot 4', precio: 2860, stock: 5 }, { nombre: 'God of War', precio: 3350, stock: 6 }, { nombre: 'Elden Ring', precio: 4320, stock: 20 }, { nombre: 'The Day Before', precio: 4990, stock: 10 }])
db.mensajes.insertMany([{ mail: 'emartinez@gmail.com', asunto: 'Titulo mensaje 1', mensaje: 'Texto donde va mensaje 1' }, { mail: 'nmolina@gmail.com', asunto: 'Titulo mensaje 2', mensaje: 'Texto donde va mensaje 2' }, { mail: 'ntagliafico@gmail.com', asunto: 'Titulo mensaje 3', mensaje: 'Texto donde va mensaje 3' }, { mail: 'cromero@gmail.com', asunto: 'Titulo mensaje 4', mensaje: 'Texto donde va mensaje 4' }, { mail: 'notamendi@gmail.com', asunto: 'Titulo mensaje 5', mensaje: 'Texto donde va mensaje 5' }, { mail: 'efernandez@gmail.com', asunto: 'Titulo mensaje 6', mensaje: 'Texto donde va mensaje 6' }, { mail: 'rdepaul@gmail.com', asunto: 'Titulo mensaje 7', mensaje: 'Texto donde va mensaje 7' }, { mail: 'adimaria@gmail.com', asunto: 'Titulo mensaje 8', mensaje: 'Texto donde va mensaje 8' }, { mail: 'jalvarez@gmail.com', asunto: 'Titulo mensaje 9', mensaje: 'Texto donde va mensaje 9' }, { mail: 'lmessi@gmail.com', asunto: 'Titulo mensaje 10', mensaje: 'Texto donde va mensaje 10' }])
// 3
db.productos.find().pretty()
db.mensajes.find().pretty()
// 4
db.productos.estimatedDocumentCount()
db.mensajes.estimatedDocumentCount()

//5 a

db.productos.insertOne({ nombre: 'The Callisto Protocol', precio: 3999, stock: 13 });

// b - i

db.productos.find({ precio: { $lt: 1000}})

// b - ii

db.productos.find({ precio: { $gt: 1000, $lt: 3000}})

// b - iii

db.productos.find({ precio: { $gte: 3000 } })

// b - iv

db.productos.find({precio: {$eq: 900}},{'nombre':1, "_id":0} )

// c

db.productos.updateMany({ }, { $set: { stock: 100 } })

// d

db.productos.updateMany({ precio: { $gt: 4000}}, { $set: { stock: 0}})

// e

db.productos.deleteMany({precio: {$lt: 1000}})

// 6

// En la base de datos 'admin' realizar lo siguiente:

use admin

db.createUser({ user: 'pepe', pwd: 'asd456', roles: [{ role: 'read', db: 'ecommerce'}]})

// Luego se sale de los CLI y se vuelve a iniciar en una:

mongod --auth --dbpath ./mibase

// Y en la otra:

mongosh -u pepe -p asd456

// Comprobar eliminar un producto y sale mensajes de error