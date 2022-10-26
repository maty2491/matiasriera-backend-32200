class Usuario{
    constructor (nombre='Matias', apellido='Riera', libros =[{nombre: 'El señor de las moscas', autor: "William Golding"},{nombre: "Fundicion", autor: "Isaac Asimov"}], mascotas =["Mara", "Blue"]){
        this.nombre= nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        const nombreCompleto = this.nombre +" "+ this.apellido
        console.log(nombreCompleto)
        return this.nombre, this.apellido
    }

    addMascota(nombreMascota){ 
        
        this.mascotas.push(nombreMascota)
        console.log(this.mascotas)
        return console.log(this.mascotas)
    }

    countMascotas(){
        let cantidad = this.mascotas.length
        console.log(cantidad)
        return cantidad
        
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames(){     
        const nombreLibros = this.libros.map((e) => e.autor)
        console.log(nombreLibros);
        return nombreLibros
    }
}

const usuario = new Usuario()

usuario.getFullName()

usuario.addMascota(nombreMascota="Morris")

usuario.countMascotas()

usuario.addBook("The Witcher: El último deseo", " Andrzej Sapkowski")

usuario.getBookNames()

