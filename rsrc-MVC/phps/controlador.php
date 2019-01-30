<?php



# Guardamos la conexion a la BD por si las flys
require_once 'config/db-config.php';
$dsn="pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";
   

require_once 'modelos/autor.php';

$arrayAutores = array();

function getAutores($dsn){
        $conn = new PDO($dsn); 
        $result = pg_query($conn, "SELECT id,nombre FROM Autores");
        while ($row = pg_fetch_row($result)) {
            echo "Nuevo autor";
            $auxAutor = new Autor();
            $auxAutor.setId($row[0]);
            $auxAutor.setNombre($row[1]);
            arrayAutores.append($auxAutor);
            }
    }

echo getAutores($dsn);

?>
