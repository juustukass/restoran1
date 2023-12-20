<?php

$servername = "localhost";  
$username = "root";  
$password = ""; 
$dbname = "users"; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

$name = $_POST['имя'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql ="INSERT INTO users (имя, email, gender, password) 
VALUES ('$name','$email', '$password')";



if ($conn->query($sql) === TRUE) {
    header('Location: autorisation.html');
    echo "Регистрация успешно завершена!";
} else {
    echo "Ошибка при регистрации: " . $conn->error;
}

?>