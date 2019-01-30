<?php



# Guardamos la conexion a la BD por si las flys
require_once 'config/db-config.php';
$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";
    
require_once 'model
# Clase Controlador
class controlador{

    

    public function getAutores(){
        $conn = new PDO($dsn);
        $result = pg_query($conn, "SELECT id,nombre FROM authors");
        while ($row = pg_fetch_row($result)) {
            echo "Author: $row[0]  E-mail: $row[1]";
  echo "<br />\n";
}
        
    }

}


?>
