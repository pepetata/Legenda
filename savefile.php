<?php

function warning_handler($errno, $errstr) {
    global $warn;
    $warn = TRUE;
    echo 'passou pelo warn<br>';
}

//set_error_handler("warning_handler", E_WARNING);
$warn = FALSE;

if (isset($_GET['idSubtitleFile'])) {
//    echo 'estou no savefile. idSubtitleFile= ' . $_GET['idSubtitleFile'] . '<br>';
    $idSubtitleFile = $_GET['idSubtitleFile'];
}

if (isset($_GET['file'])) {
    echo 'estou no savefile file=' . $_GET['file'] . '<br>';
    $file = $_GET['file'];
}

if (isset($_GET['dir'])) {
    $dir = $_GET['dir'];
}

//echo 'Solicitado download de ' . $file . '   idSubtitleFile= ' . $idSubtitleFile;
// login
//$params = (['', '', 'eng', 'OSTestUserAgent']);
//$request = xmlrpc_encode_request("LogIn", $params);
//$context = stream_context_create(array('http' => array(
//        'method' => "POST",
//        'header' => "Content-Type: text/xml",
//        'content' => $request,
//        'params' => $params
//        )));
////echo '$request='.$request.'<br>';
//$filexml = file_get_contents("http://api.opensubtitles.org/xml-rpc", false, $context);
//$response = xmlrpc_decode($filexml);
//if ($response && xmlrpc_is_fault($response)) {
//    echo 'deu erro no login<br>';
//    trigger_error("xmlrpc: $response[faultString] ($response[faultCode])");
//} else {
//    $token = $response['token'];
//
//// download files
////    echo "$idSubtitleFile = " . $idSubtitleFile;
//    $params = ([$token, [$idSubtitleFile]]);
//    $request = xmlrpc_encode_request("DownloadSubtitles", $params);
//    $context = stream_context_create(array('http' => array(
//            'method' => "POST",
//            'header' => "Content-Type: text/xml",
//            'content' => $request,
//            'params' => $params
//    )));
//    $filexml = file_get_contents("http://api.opensubtitles.org/xml-rpc", false, $context);
//    $response = xmlrpc_decode($filexml);
//    if ($response && xmlrpc_is_fault($response)) {
//        echo 'deu erro no DownloadSubtitles<br>';
//        trigger_error("xmlrpc: $response[faultString] ($response[faultCode])");
//    } else {
////
////
//        // base64 decode o arquivo baixado
//        $rawfile = base64_decode($response['data'][0]['data']);
////
////
//        // unzip o arquivo baixado
//        $asciistring = gzdecode($rawfile);
//        // se deu erro, nao gravar o arquivo
//        if (!$warn) {
//
//            // save the file
//            $fd = fopen($dir . '/' . $file, "w+");
//            if ($fd) {
//                fwrite($fd, $asciistring . "\n");
//                fclose($fd);
//                echo 'file: "' . $file . '" saved.<br>';
//            }
//        }
//    }
//}

?>
