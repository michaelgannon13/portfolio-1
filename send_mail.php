<?php
    $from = $_POST['from'];
    $name = $_POST['name'];
    $to = "None";
    $subject = $_POST['subject'];
    $body = $_POST['body'];
    $headers = "From: $name <$from>";

    if (isset($_POST['send'])) {
        if (isset($_POST['not_bot'])) {
            mail($to,$subject,$body,$headers);
            ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
    <head>
        <title>Your Page Title</title>
        <meta http-equiv="REFRESH" content="10;url=http://www.moikel.com/contact.html">
    </head>
    <body>
        <div style="margin:0px auto;text-align:center;">
            <div style="border:1px solid #888; padding:3em; background:#f3f3f3; font-family:arial;">
                Your mail was successfully sent, you will be redirected in 10 seconds or you can click <a href="http://www.moikel.com/contact.html">here</a> now.
            </div>
        </div>
    </body>
</html>
            <?php
        } 
    } 
?>
