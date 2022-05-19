class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    getFullName(){
        console.log(`El usuario es ${this.nombre} ${this.apellido}`)
    }

    addMascota(newPet){
        this.mascotas.push(newPet)
        console.log(this.mascotas)
    }
    
    countMascotas(){
        console.log(this.mascotas.length)
    }
    
    addBook(nombre, autor){
        this.libros.push({nombre:nombre, autor:autor})
        console.log(this.libros)
    }

    getBookNames(){
        let bookNames = this.libros.map((element) =>{
            return element.nombre
        })
        console.log(bookNames)
    }
}

let usuario1 = new Usuario("Pepe", "Sanchez",[{nombre: "El señor de los anillos", autor: "Tolkien"},{nombre: "Harry Potter", autor: "JKK Rowling"}],["Timon", "Pumba"])

//Probamos el metodo de getFullname:
usuario1.getFullName();

//Probamos el metodo de contar mascotas, luego agrego una y vuelvo a contar:
usuario1.countMascotas();
usuario1.addMascota("Simba");
usuario1.countMascotas();

//Pruebo agregar dos libros y luego cuento usando el metodo de getBookNames declarado dentro de la clase.
usuario1.addBook("Maze Runner", "James Dashner");
usuario1.addBook("El libro de la Selva", "Rudyard Kipling");

usuario1.getBookNames();