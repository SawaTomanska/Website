<?php
if ((empty($_POST['name'])) || (empty($_POST['email'])) || (empty($_POST['title'])) ||  (empty($_POST['content']))) {
	header('Location: kontakt.html');
	exit();
} else {
	$Myemail = 'sawa.wisniewska@gmail.com';
	// dane z formularza
	$name = $_POST['name'];
	$email = $_POST['email'];
	$title = $_POST['title'];
	$content = $_POST['content'];
	echo $name."<br/>";
	echo $email."<br/>";
	echo $title."<br/>";
	echo $content."<br/>";
	if((!empty($name)) || (!empty($femail)) || (!empty($title)) || (!empty($content))) {
		echo "hello<br/>";
		$subject = 'Wiadomość z localhosta';
		$header = 'Masz Wiadomość od ' . $name . '\r\n';

		if(mail($Myemail, $subject, $content, $header)) {
			echo '<p style="color: green"> Wysłano :) </p>';
		  }
		  else {
			echo '<p style="color: red"> Nie udało się wysłać :( </p>';
		  }
	}
}
?>