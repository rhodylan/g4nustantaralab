<?php

include 'connect.php';

//create database
$sql = "CREATE DATABASE nusantara";
if($conn->query($sql) === TRUE){
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

?>