class Libro {
  constructor(titulo, autor, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this._prestado = "Disponible";
  }

  get estado() {
    return this._prestado;
  }

  set estado(nuevoEstado) {
    if (nuevoEstado === "Disponible" || nuevoEstado === "Prestado") {
      this._prestado = nuevoEstado;
    } else {
      console.log("Error");
    }
  }

  prestar() {
    if (this._prestado === "Disponible") {
      this.estado = "Prestado";
    }
  }

  devolver() {
    if (this._prestado === "Prestado") {
      this.estado = "Disponible";
    }
  }
}

class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.libros = [];
  }

  agregarLibro = function (libro) {
    this.libros.push(libro);
  };

  buscarPorISBN = function (isbn) {
    return this.libros.find((l) => l.isbn == isbn);
  };

  prestarLibro = function (isbn) {
    const libro = this.libros.find((l) => l.isbn == isbn);

    libro.prestar();
  };

  devolverLibro = function (isbn) {
    const libro = this.libros.find((l) => l.isbn == isbn);

    libro.devolver();
  };

  mostrarLibros = function () {
    this.libros.forEach((element) => {
      console.log(element);
    });
  };
}

const biblio = new Biblioteca("Biblioteca Central");
const libro = new Libro(
  "Cien años de soledad",
  "Gabriel García Márquez",
  "11111"
);
const libro2 = new Libro(
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  "22222"
);
const libro3 = new Libro("La sombra del viento", "Carlos Ruiz Zafón", "33333");

console.log(libro.estado, "- Libro 1: Disponible");
biblio.mostrarLibros();
biblio.agregarLibro(libro);
biblio.agregarLibro(libro2);
biblio.agregarLibro(libro3);
biblio.mostrarLibros();
libro.prestar();
libro2.prestar();
libro2.prestar();
console.log(libro.estado, "- Libro 1: Prestado");
console.log(libro2.estado, "- Libro 2: Prestado");
console.log(libro3.estado, "- Libro 3: Disponible");
biblio.prestarLibro(33333);
console.log(libro3.estado, "- Libro 3: Prestado");
biblio.devolverLibro(33333);
console.log(libro3.estado, "- Libro 3: Disponible");
console.log(biblio.buscarPorISBN(11111));
