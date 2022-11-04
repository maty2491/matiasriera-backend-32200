const fs = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta

    }

    async save(obj) {
        //obtenemos todos los objetos
        const listado = await this.getAll()

        //Si existe el producto no agrega nada
        if (listado.length > 0 && listado.some((el) => el.title === obj.title)) {
            console.log("El producto ya se encuentra en el catalogo")
            return
        }

        //identificamos el ulimo id y lo incrementamos        
        let nuevoId

        if (listado.length == 0) {
            nuevoId = 1;
        } else {
            nuevoId = listado[listado.length - 1].id + 1
        }

        const nuevoObjConId = { ...obj, id: nuevoId }

        //Insertar mi objeto al listado

        listado.push(nuevoObjConId)

        //lo guardamos usando fs y try catch
        try {
            const data = await fs.promises.writeFile(this.ruta, JSON.stringify(listado, null, 2))
            return nuevoId
        } catch (error) {
            throw new Error(`Error al guardar el nuevo objeto: ${error}`)
        }
    }
    
    //Asumiendo que esta el txt y que tiene data
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.ruta, "utf-8")
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    //funcion para obtener obj por id
    async getById(id) {
        try {
            const listado = await this.getAll()
            return listado.find(item => item.id === id) ?? null
        } catch (error) {
            throw new Error(`No se encontro el dato: ${error}`)
        }
    }

    //Borrar por ID
    async deleteById(id) {
        const listado = await this.getAll()
        const nuevoListado = listado.filter(item => item.id != id)
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(nuevoListado, null, 2))
        } catch (error) {
            throw new Error(`No se pudo borrar el dato: ${error}`)
        }
    }

    //Borrar todo
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`No se puden borrar todos los datos: ${error}`)
        }
    }
}

module.exports = Contenedor