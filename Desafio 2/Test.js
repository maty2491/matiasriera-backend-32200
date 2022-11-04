const Contenedor = require('./Desafio2.js');
const log = (p) => console.log(p)
const item1 ={
    title: "Escuadra",
    price: 250,
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg'
}
const item2 = {
    title: "Calculadora",
    price: 500,
    thumbnail: 'https://t2.uc.ltmcdn.com/es/posts/7/0/7/calculadora_cientifica_eoocoo_52707_4_600.jpg'
}
const item3 = {
    title: "Boligrafo",
    price: 50,
    thumbnail: 'https://www.elementi.com.ar/wp-content/uploads/2020/12/jade-plata-azul-logo.jpg'
}

async function main() {
    const contenedor = new Contenedor('./productos.txt')

    //DATA DEBERIA ESTAR VACIA => []
    let datos1 = await contenedor.getAll()
    log(datos1)

    //DEBE TENER 1 ELEMENTO Y RETORNAR 1 (EL ARCHIVO DEBE CREARSE)
    let id1 = await contenedor.save(item1)
    log(id1)

    //DEBE TENER 2 ELEMENTOS Y RETORNAR 2
    let id2 = await contenedor.save(item2)
    log(id2)

    //DATA DEBERIA TENER DOS ELEMENTOS 2
    let datos2 = await contenedor.getAll()
    log(datos2)

    //BUSCAR POR ID 1// DEBERIA SER Escuadra
    let busca1 = await contenedor.getById(1)
    log(busca1)

    //BUSCAR POR ID QUE NO EXISTE
    let busca2 = await contenedor.getById(10)
    log(busca2)

    //DEBE SALIR UN MENSAJE DE ERROR
    let id3 = await contenedor.save(item4)
    log(id3)

    //BORRAR EL ID 1, deberia tener 1 elemento, solamente el id 2
    await contenedor.deleteById(1)
    let delete1 = await contenedor.getAll()
    log(delete1)

    //BORRAR TODO no deberia tener elementos
    await contenedor.deleteAll()
    let delete2 = await contenedor.getAll()
    log(delete2)

}

main()
