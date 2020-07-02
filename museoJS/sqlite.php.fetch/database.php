<?php

require_once "biblioteca.php";

$db = conectaDb();

cabecera("Crea base de datos");

borraTodo($db, $tablas, $consultasCreaTabla);

$usuarios = ["Miguel de Cervantes Saavedra", "Gabriel García Márquez", "Mario Vargas Llosa", "Carlos Fuentes", "Benito Pérez Galdós", "Ramón Gómez de la Serna", "Pío Baroja", "Vicente Aleixandre", "Juan Ramón Jiménez", "Luis Cernuda", "Jorge Luis Borges", "Julio Cortázar", "Miguel Delibes", "Francisco de Quevedo", "Luis de Góngora", "Rosalía de Castro", "Lope de Vega", "Adolfo Bioy Casres", "Isabel Allende", "Alfredo Bryce Echenique", "Fernando Aramburu", "Rafael Chirbes", "Enrique Jardiel Poncela", "Pedro Muñoz Seca", "Rafael Sánchez Ferlosio", "José Lezama Lima", "Juan Rulfo", "Eduardo Mendoza", "Javier Pérez Andújar"];

foreach ($usuarios as $nombre) {
    $consulta = "INSERT INTO $tablaUsuarios (usuario) VALUES ('$nombre')";
    if ($db->query($consulta)) {
        print "    <p>Registro $nombre creado correctamente.</p>\n";
    } else {
        print "    <p class=\"aviso\">Error al crear el registro $nombre.<p>\n";
    }
}

$db = null;

pie();
