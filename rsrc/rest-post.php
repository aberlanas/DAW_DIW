<?php

   if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');



$object = (object) [
    'nombre' => 'Angel por Post',
    'edad' => 42,
  ];
  
$message = (object)[
	'msg' => 'Sigue buscando '
];
$data = json_decode(file_get_contents('php://input'), true);
if(isset($data['nombre']) && $data['nombre'] == 'Angel')
{
	echo  (json_encode($object));
}else{
	echo (json_encode($message));
}


?>
