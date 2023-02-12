<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "cjwaehler@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "Nachricht erhalten von ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: kontakt.html?mailsend");
} 