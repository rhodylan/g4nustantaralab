<?php

include 'connect.php';

$databaseName = 'nusantara';

// Check if the database already exists
$sql = "SHOW DATABASES LIKE '$databaseName'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Database '$databaseName' already exists";
} else {
    // Create the database
    $sql = "CREATE DATABASE $databaseName";
    if ($conn->query($sql) === TRUE) {
        echo "Database '$databaseName' created successfully";
    } else {
        echo "Error creating database: " . $conn->error;
    }
}

?>
