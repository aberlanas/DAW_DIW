<?php


# Clase autor

# Guardamos la conexion a la BD por si las flys
require_once 'config/db-config.php';
$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";

class Autor{
    
    
    private $id;
    private $nombre;
    
    public function getNombre(){
        return $this->$nombre;
    }
    
    public function setNombre($newNombre){
        $this->$nombre = $newNombre;
    }
    
    public function guardar(){
        
    }
}



?>
