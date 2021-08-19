<?php
if (isset ($_POST['submit'])) {

    //retrieve data from the form
    $name = $_POST['name'];
    $email= $_POST['emailaddress'];
    $subjet = $_POST['subject'];
    $message = $_POST['message'];
    $to = "dhirpatel133@gmail.com";

    //print out form info
    $txt = "Name = ". $name . "\r\n  Email = " . $email . "\r\n Subject = " . $subjet . "\r\n Message =" . $message;

    if (!empty($email) && !empty($name) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === true) {
            $mail = mail($to,$subject,$txt);
        }
    }
}
?>