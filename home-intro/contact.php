<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "comment_system";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) { // If Check Connection
    die("<script>alert('Connection Failed.')</script>");
}

if (isset($_POST['sub'])) { 
	$name = $_POST['uname']; 
    $com = $_POST['come'];

	$sql = "INSERT INTO home_comment ( name, come)
			VALUES ('$name', '$com')";
	$result = mysqli_query($conn, $sql);
	if ($result) {
		echo "<script>alert('Comment added successfully.')</script>";
	} else {
		echo "<script>alert('Comment does not add.')</script>";
	}
}
echo"<html><h1>
    Thank you for your comment
    <a href=index.html>Go back</a>
</h1></body></html>";
?>