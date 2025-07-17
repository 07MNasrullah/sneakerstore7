<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "sneaker_store";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$card_number = $_POST['card_number'];
$expiry_month = $_POST['expiry_month'];
$expiry_year = $_POST['expiry_year'];
$cvv = $_POST['cvv'];

$stmt = $conn->prepare("INSERT INTO payments (name, phone, address, card_number, expiry_month, expiry_year, cvv) VALUES (?, ?, ?, ?, ?, ?, ?)");

if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

$stmt->bind_param("sssssss", $name, $phone, $address, $card_number, $expiry_month, $expiry_year, $cvv);

if ($stmt->execute()) {
    echo "<script>alert('Checkout complete');</script>";
    echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
} else {
    echo "Error executing query: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>