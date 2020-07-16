<?php

$_server = "localhost";
$username = "root";
$password = "";

$connect = mysqli_connect($server,$username,$password);

if(!$connect){
    die("connection to this database failed due to". mysqli_connect_error());
}
echo " successfull connection";
?>