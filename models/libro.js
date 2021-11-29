const db = require('../config/config'); //importa la variable db del archivo config.js


const Libro = {}; //objeto


// método para obtener los libros de la bd
Libro.getAll = () => {
    const sql = `
    SELECT 
        * 
    FROM 
        libros
    `;

    return db.manyOrNone(sql) //retorna muchos o ningún libro (en caso de que la tabla esté vacía)
}

//método para registrar libros
Libro.create = (libro) => {
    const sql = `
    INSERT INTO
        libros(
            titulo,
            autor,
            genero,
            edicion
        )
    VALUES($1, $2, $3, $4) RETURNING id
    `;

    return db.oneOrNone(sql, [//que retorne un ID o nada
        libro.titulo,
        libro.autor,
        libro.genero,
        libro.edicion
    ]);
}
module.exports = Libro;