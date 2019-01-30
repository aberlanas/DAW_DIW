<?php


# Clase autor

# Guardamos la conexion a la BD por si las flys

class Autor{
    
    
    private $id=0;
    private $nombre="NoName";
    
    public function getNombre(){
        return $this->nombre;
    }
    
    public function setNombre($newNombre){
        $this->nombre = $newNombre;
    }
    
    public function getId(){
        return $this->id;
    }
    
    public function setId($newId){
        $this->id = $newId;
    }

}



?>
