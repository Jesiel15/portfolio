<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
date_default_timezone_set('America/Sao_Paulo');


//recebe os valores passado pelo front como um objeto {}
$obj = json_decode(file_get_contents('php://input'), true);

// esse 5 informacoes acessao os itens do objeto
$from = $obj['email_incial'];

$to = $obj['email_final'];

$subject = $obj['email_nome'];

$message =  $obj['email_mensagem'];

$headers = "De: ".$from; //ainda nao sei, veio como padrao assim, tem que testar

// metodo que executa a requisição do email, modelo padrão do php
mail($to, $subject, $message, $headers);

// return uma mensagem no preview do navegador, confere lá
echo "A mensagem de e-mail foi enviada.";

?>
