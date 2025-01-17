<?php
    // Set your recipient email here
    $owner_email = "irfaanahamed0105@gmail.com"; // Replace with the actual recipient email address
    $headers = 'From: ' . htmlspecialchars($_POST["email"]);
    $subject = 'A message from your site visitor ' . htmlspecialchars($_POST["name"]);
    $messageBody = "";

    // Build the email body
    if (!empty($_POST['name'])) {
        $messageBody .= '<p>Visitor: ' . htmlspecialchars($_POST["name"]) . '</p>' . "\n";
        $messageBody .= '<br>' . "\n";
    }
    if (!empty($_POST['email'])) {
        $messageBody .= '<p>Email Address: ' . htmlspecialchars($_POST['email']) . '</p>' . "\n";
        $messageBody .= '<br>' . "\n";
    } else {
        $headers = '';
    }
    if (!empty($_POST['state'])) {
        $messageBody .= '<p>State: ' . htmlspecialchars($_POST['state']) . '</p>' . "\n";
        $messageBody .= '<br>' . "\n";
    }
    if (!empty($_POST['phone'])) {
        $messageBody .= '<p>Phone Number: ' . htmlspecialchars($_POST['phone']) . '</p>' . "\n";
        $messageBody .= '<br>' . "\n";
    }
    if (!empty($_POST['fax'])) {
        $messageBody .= '<p>Fax Number: ' . htmlspecialchars($_POST['fax']) . '</p>' . "\n";
        $messageBody .= '<br>' . "\n";
    }
    if (!empty($_POST['message'])) {
        $messageBody .= '<p>Message: ' . htmlspecialchars($_POST['message']) . '</p>' . "\n";
    }

    // Send the email
    try {
        if (!mail($owner_email, $subject, $messageBody, $headers)) {
            throw new Exception('Mail failed');
        } else {
            echo 'Mail sent';
        }
    } catch (Exception $e) {
        echo $e->getMessage() . "\n";
    }
?>
