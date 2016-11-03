<?php

// Put your device token here (without spaces):
$deviceToken = '912d8cccc3bd7099fe5374ca0b0356c643d47296d6686555a887e8062cef9269';

// Put your private key's passphrase here:
$passphrase = '';

$message = $argv[1];
$jsonStock = array();
$jsonStock = file_get_contents("stock.json");
$jsonsStockString = json_encode($jsonStock);

if (!$message)
    exit('Example Usage: $php stockpush.php \'New Stock!\'' . "\n");

////////////////////////////////////////////////////////////////////////////////

$ctx = stream_context_create();
stream_context_set_option($ctx, 'ssl', 'local_cert', 'kata14.pem');
stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);

// Open a connection to the APNS server
$fp = stream_socket_client(
  'ssl://gateway.sandbox.push.apple.com:2195', $err,
  $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx);

if (!$fp)
  exit("Failed to connect: $err $errstr" . PHP_EOL);

echo 'Connected to APNS' . PHP_EOL;

// Create the payload body
$body['aps'] = array(
  'alert' => $message,
  'stock_json' => $jsonsStockString,
  );

// Encode the payload as JSON
$payload = json_encode($body);

// Build the binary notification
$msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload;

// Send it to the server
$result = fwrite($fp, $msg, strlen($msg));

if (!$result)
  echo 'Message not delivered' . PHP_EOL;
else
  echo 'Message successfully delivered' . PHP_EOL;

// Close the connection to the server
fclose($fp);
