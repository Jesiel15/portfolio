function fazerRequisicao() {
    console.log('Fazer Resquisicao');

    // setando o endereço, onde vai recerbe o email
    let email_final = "josielsifa@gmail.com";

    // recebendo os valores dos input's
    let email_inicial = document.getElementById('idEmail').value;
    let email_nome = document.getElementById('idNome').value;
    let email_mensagem = document.getElementById('idMensagem').value;

    // motivo de setar um array e depois acessar ele com o indice 0
    // pq se para direto como um objeto ele chega de uma diferente no php
    let array_email = [{
         email_inicial,
         email_nome,
         email_mensagem
    }]

    /** Esse array_email funciona das duas maneiras, tanto passando
     * chave/valor {'chave': valor}  ou {'valor': valor} 
     * ou simplesmente {valor} quando nome da chave é o mesmo do valor
     **/


    console.log('array_email', array_email[0]);


    // caminho referente ao arquivo php
    let url = 'http://localhost/cioss-webservice/sendEmail_portifolio/portfolio-master/api/sendEmail.php';


    var xhttp = new XMLHttpRequest(); // criando uma instancia de requisao
    xhttp.open("POST", url, array_email[0]); //adicionando requisicao get com a url e o valor

    xhttp.send();//A execução do script para aqui até a requisição retornar do servidor

    alert(xhttp.responseText); //resposta da requisicao
}