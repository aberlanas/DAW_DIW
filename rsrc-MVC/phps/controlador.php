<?php

# Guardamos la conexion a la BD por si las flys
require_once 'config/db-config.php';
$dsn="host=$host port=5432 dbname=$db user=$username password=$password";

# Clase de autores
require_once 'modelos/autor.php';
$arrayAutores = array();

function getAutores($dsn){
        $auxArray = array();
        $conn = pg_connect($dsn);
        $query = "SELECT id,nombre FROM Autores";
        $result = pg_query($conn, $query);
        while ($row = pg_fetch_row($result)) {
            $auxAutor = new Autor();
            $auxAutor->setId($row[0]);
            $auxAutor->setNombre($row[1]);
            array_push($auxArray,$auxAutor);
            }
        return $auxArray;
    }

$arrayAutores = getAutores($dsn);



?>
