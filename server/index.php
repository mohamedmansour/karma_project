<?php
/*
require_once('includes/Oauth.php');
require_once('includes/Facebook.php');

session_start();

$app_id = 'APP_ID';
$app_secret = 'APP_SECRET';
$callback = 'http://localhost/auth/facebook.php'; // [DOMAIN]/auth/facebook.php in this example

$facebook = new Facebook($app_id, $app_secret, $callback);
if($facebook->validateAccessToken()){
        $response = $facebook->makeRequest('https://graph.facebook.com/me');
        print_r($response);
}

*/
require_once('phprestsql.php');

$PHPRestSQL =& new PHPRestSQL();
$PHPRestSQL->exec();

/*
echo '<pre>';
var_dump($PHPRestSQL->output);
//*/

?>