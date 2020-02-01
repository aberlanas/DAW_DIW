<?php

$object = (object) [
    'nombre' => 'Angel',
    'edad' => 42,
  ];

if(isset($_GET['nombre']) && $_GET['nombre'] == 'Angel')
{
	echo  (json_encode($object));
}


?>
