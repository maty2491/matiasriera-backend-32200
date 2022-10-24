class Usuario{
    constructor (nombre='', apellido='', libros =[], mascotas =[]){
        this.nombre= nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`) 
    }

    addMascota(){
        this.mascotas.push(this.mascotas)
        console.log(this.mascotas[0]);
    }

    countMascotas(){
        const cantidad = this.mascotas.length
        const text = cantidad > 1 ? `El usuario tiene ${cantidad} mascotas` : "Tiene una sola mascota"
        console.log(`${this.nombre} ${cantidad === 0 ? 'No tiene mascotas': text}`)
    }
    addBook(libro, autor){
        this.libros.push({libro: libro, autor: autor})
    }
    getBookNames(){
        const nombreLibros = this.libros.map((e)=>e.libro)
        console.log(nombreLibros)
    }
}

const usuario = new Usuario('Matias', 'Riera')
usuario.getFullName()

usuario.addMascota('Perro')
usuario.addMascota('Gato')
usuario.countMascotas()

usuario.addBook("El Padrino", "Mario Puzo")
usuario.addBook("The Witcher: El último deseo", " Andrzej Sapkowski")
usuario.addBook("Metro 2033", "Dmitri Glujovski")
usuario.getBookNames()


