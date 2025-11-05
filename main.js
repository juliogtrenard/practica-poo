/**
 * Clase Libro que tiene las propiedades título, autor, ISBN y un estado que indica si el libro está prestado o disponible.
 */
class Libro {
  constructor(titulo, autor, isbn) {
    /**
     * @property {string} titulo Título del libro.
     */
    this.titulo = titulo;

    /**
     *  @property {string} autor Autor del libro.
     */
    this.autor = autor;

    /**
     * @property {string|number} isbn ISBN del libro.
     */
    this.isbn = isbn;

    /**
     * @property {string} _prestado Estado del libro, puede ser "Disponible" o "Prestado".
     */
    this._prestado = "Disponible";
  }

  /**
   * Obtiene el estado del libro.
   * @returns {string} Estado del libro.
   */
  get estado() {
    return this._prestado;
  }

  /**
   * Establece el estado del libro.
   * @param {string} nuevoEstado Nuevo estado del libro.
   */
  set estado(nuevoEstado) {
    if (nuevoEstado === "Disponible" || nuevoEstado === "Prestado") {
      this._prestado = nuevoEstado;
    } else {
      throw new Error("Ingresa un estado correcto.");
    }
  }

  /**
   * Presta el libro si está disponible.
   */
  prestar() {
    if (this._prestado === "Disponible") {
      this.estado = "Prestado";
    }
  }

  /**
   * Devuelve el libro si está prestado.
   */
  devolver() {
    if (this._prestado === "Prestado") {
      this.estado = "Disponible";
    }
  }
}

/**
 * Clase Biblioteca que tiene una colección de libros y métodos para agregar libros, buscar por ISBN, prestar y devolver libros.
 */
class Biblioteca {
  constructor(nombre) {
    /**
     * @property {string} nombre Nombre de la biblioteca.
     */
    this.nombre = nombre;
    /**
     * @property {Array<Libro>} libros Colección de libros en la biblioteca.
     */
    this.libros = [];
  }

  /**
   * Agrega un libro a la colección de la biblioteca.
   * @param {Libro} libro Objeto libro a agregar.
   */
  agregarLibro = function (libro) {
    this.libros.push(libro);
  };

  /**
   * Busca un libro por su ISBN.
   * @param {string|number} isbn ISBN del libro a buscar.
   * @returns {Libro|undefined} El libro encontrado o undefined si no se encuentra.
   */
  buscarPorISBN = function (isbn) {
    return this.libros.find((l) => l.isbn == isbn);
  };

  /**
   * Presta un libro si está disponible.
   * @param {string|number} isbn ISBN del libro a prestar.
   */
  prestarLibro = function (isbn) {
    const libro = this.libros.find((l) => l.isbn == isbn);

    libro.prestar();
  };

  /**
   * Devuelve un libro si está prestado.
   * @param {string|number} isbn ISBN del libro a devolver.
   */
  devolverLibro = function (isbn) {
    const libro = this.libros.find((l) => l.isbn == isbn);

    libro.devolver();
  };

  /**
   * Muestra todos los libros en la colección de la biblioteca.
   */
  mostrarLibros = function () {
    this.libros.forEach((element) => {
      console.log(
        `Libro: ${element.titulo} Autor: ${element.autor} ISBN: ${element.isbn}`
      );
    });
  };
}

// Ejemplo de uso:
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
