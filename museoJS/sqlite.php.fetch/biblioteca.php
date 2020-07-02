<?php

define("SQLITE_DATABASE", "/tmp/prueba_ajax_200630.sqlite");  // Ubicación de la base de datos
define("SQLITE_TABLE_USUARIOS", "usuarios");                  // Nombre de la tabla
$tablaUsuarios      = SQLITE_TABLE_USUARIOS;                  // Nombre de la tabla Usuarios
$tamUsuariosUsuario = 20;                                     // Tamaño de la columna Usuarios > Nombre de Usuario
$tablas = [
    $tablaUsuarios,
];

function conectaDb()
{
    try {
        $tmp = new PDO("sqlite:" . SQLITE_DATABASE);
        return $tmp;
    } catch (PDOException $e) {
        cabecera("Error grave");
        print "    <p class=\"aviso\">Error: No puede conectarse con la base de datos.</p>\n";
        print "\n";
        print "    <p class=\"aviso\">Error: " . $e->getMessage() . "</p>\n";
        pie();
        exit();
    }
}

$consultasCreaTabla = [
    // Tabla Usuarios
    "CREATE TABLE $tablaUsuarios (
        id INTEGER PRIMARY KEY,
        usuario VARCHAR($tamUsuariosUsuario)
    )",
];

function borraTodo($db, $nombresTablas, $consultasCreacionTablas)
{
    foreach ($nombresTablas as $tabla) {
        $consulta = "DROP TABLE $tabla";
        if ($db->query($consulta)) {
            print "    <p>Tabla <strong>$tabla</strong> borrada correctamente.</p>\n";
            print "\n";
        } else {
            print "    <p class=\"aviso\">Error al borrar la tabla <strong>$tabla</strong>.</p>\n";
            print "\n";
        }
    }

    foreach ($consultasCreacionTablas as $consulta) {
        if ($db->query($consulta)) {
            print "    <p>Tabla creada correctamente.</p>\n";
            print "\n";
        } else {
            print "    <p class=\"aviso\">Error al crear la tabla.</p>\n";
            print "\n";
        }
    }
}

function cabecera($texto)
{
    print "<!DOCTYPE html>\n";
    print "<html lang=\"es\">\n";
    print "<head>\n";
    print "  <meta charset=\"utf-8\">\n";
    print "  <title>\n";
    print "    $texto. Prueba Ajax.\n";
    print "  </title>\n";
    print "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
    print "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n";
    print "  <link rel=\"stylesheet\" href=\"estilo.css\">\n";
    print "</head>\n";
    print "\n";
    print "<body>\n";
    print "  <header>\n";
    print "    <h1>Prueba Ajax - $texto</h1>\n";
    print "\n";
    print "    <nav>\n";
    print "      <ul>\n";
    print "        <li><a href=\"index.php\">Inicio</a></li>\n";
    print "        <li><a href=\"database.php\">Reiniciar base de datos</a></li>\n";
    print "      </ul>\n";
    print "    </nav>\n";
    print "  </header>\n";
    print "\n";
    print "  <main>\n";
}

function pie()
{
    print "  </main>\n";
    print "\n";
    print "  <footer>\n";
    print "    <p class=\"ultmod\">\n";
    print "      Última modificación de esta página:\n";
    print "      <time datetime=\"2020-06-30\">30 de junio de 2020</time>\n";
    print "    </p>\n";
    print "  </footer>\n";
    print "</body>\n";
    print "</html>";
}