<?php 

$server = "localhost";
$username = "root";
$password = "";
$database = "comment_system";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) { // If Check Connection
    die("<script>alert('Connection Failed.')</script>");
}

error_reporting(0); // For not showing any error

if (isset($_POST['sub'])) { 
	$name = $_POST['name'];
	$email = $_POST['email']; 
	$question = $_POST['question']; 
    $answer = $_POST['ans'];

	$sql = "INSERT INTO comment_box ( name, email, question, answer)
			VALUES ('$name', '$email','$question','$answer')";
	$result = mysqli_query($conn, $sql);
	if ($result) {
		echo "<script>alert('Comment added successfully.')</script>";
	} else {
		echo "<script>alert('Comment does not add.')</script>";
	}
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<link rel="stylesheet" href="main.css">-->
     <link rel="shortcut icon" href="https://img.icons8.com/fluency/96/000000/old-vmware-logo.png" >
    <link rel="stylesheet" href="main.css?v=<?php echo time(); ?>">
    <title>Comment</title>
</head>
<body>
    <section class="navi">
        <h5>GET-ALGO</h5>
    </section>
    <section class="container">
        <!--main div-->
        <div class="add-qna">
            <form action="comment.php" method="post">
                <h4 style="text-align:center;">Comment Here</h4>
                <!--row start-->
                <div class="row">
                    <div class="user-row">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Your Name" name="name" id="name" required>
                    </div>
                    <div class="user-row">
                        <label>E-mail</label>
                        <input type="text" placeholder="Enter Your E-mail" name="email" id="email" required>    
                    </div>
                </div>
                <!--row ends-->
                <!--row attributes-->
                <div class="qna">
                    <div class="qna-container">
                        <label>Question</label>
                        <input type="text" name="question" id="question" size="50"  placeholder="Enter Your Question" required>
                    </div>
                    <div class="qna-container">
                        <label>Answer</label>
                        <textarea id="ans" name="ans" placeholder="Suggest Your Answer" rows="4" cols="50"></textarea>
                    </div>
                </div>
                <div class="submit">
                    <button name="sub" class="btn">Post</button>
                </div>
            </form>
        </div>
        <!--main div ends-->
        <div class="view-qna">
            <h4>View Comments</h4>
            <div class="align">
        <?php
        
			$sql = "SELECT * FROM comment_box";
			$result = mysqli_query($conn, $sql);
			if (mysqli_num_rows($result) > 0) {
				while ($row = mysqli_fetch_assoc($result)) {

			?>
            <div  class="view-container">
            <h5><?php  echo $row ['name']; ?></h5>
            <a href="mailto:<?php echo $row['email']; ?>"><?php echo $row['email']; ?></a>
            <h5><?php echo $row ['question']; ?></h5>
            <p><?php echo $row ['answer']; ?></p>
            </div>
            <?php

				}
			}
			
			?>
            </div>
        </div>
    </section>

</body>
</html>