<?php
    ECHO ("First Name: " .  htmlspecialchars($_POST["fname"]) . "<br>");
    if(htmlspecialchars($_POST["fname"]) != null){
        ECHO ("Last Name: " .  htmlspecialchars($_POST["lname"]) . "<br>");
    }
    ECHO ("Email: " . htmlspecialchars($_POST["email"]) . "<br>");
    if(htmlspecialchars($_POST["fname"]) != null){
        ECHO ("Phone Number: " .  htmlspecialchars($_POST["phone"]) . "<br>");
    }
    ECHO ("Password: " . htmlspecialchars($_POST["pass"]) . "<br>");
?>