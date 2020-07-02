<?php
require_once "biblioteca.php";

$db = conectaDb();

error_log("$_REQUEST[term]");

$consulta = "SELECT * FROM $tablaUsuarios
    WHERE usuario LIKE :usuario
    ORDER BY usuario ASC";
$result = $db->prepare($consulta);
$result->execute([":usuario" => "%$_REQUEST[term]%"]);
$a = "[";
foreach ($result as $valor) {
  $a .= "\"$valor[usuario]\",";
}
$a = substr($a, 0, -1);
$a .= "]";
print $a;