<?php

include 'connect.php';

//choose database
$conn->select_db("nusantara");

//create table
$sql = "CREATE TABLE IF NOT EXISTS koleksi (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(30) NOT NULL,
    kategori VARCHAR(30) NOT NULL,
    descript VARCHAR(1000) NOT NULL,
    gambar LONGBLOB
)";

if($conn->query($sql) === TRUE){
    
    echo "Table created successfully ";
 //get collection data from json
    $filename = "../entity/collections.json";

    $data = file_get_contents($filename);

    $array = json_decode($data, true);
    //insert data into table
    foreach ($array["semuaCollection"] as $row) {
        $sql = "INSERT INTO koleksi (nama, kategori, descript, gambar) VALUES ('".$row["nama"]."', '".$row["kategori"]."','".$row["desc"]."','".$row["gambar"]."')";
        mysqli_query($conn, $sql);
}

if (mysqli_affected_rows($conn) > 0) {
    echo "Data from collections.json inserted successfully";
} else {
    echo "Error inserting data from collections.json: " . mysqli_error($conn);
}
//close connection
mysqli_close($conn);
} else {
    echo "Error creating table: " . $conn->error;
}

?>