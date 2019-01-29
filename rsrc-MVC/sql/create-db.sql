/*DROP DATABASE Algoritmia;
CREATE DATABASE Algoritmia;
*/
/*Tabla de autores*/
CREATE TABLE Autores(
    
        id          SERIAL PRIMARY KEY,
        nombre      varchar(100)
);


/* TAbla de algoritmos */
CREATE TABLE Algoritmos(
    
        id          SERIAL NOT NULL PRIMARY KEY, 
        nombre      VARCHAR(100),
        descripcion VARCHAR(100),
        id_autor    integer REFERENCES Autores(id),
        coste       VARCHAR(50),
        link        VARCHAR(100)
);
