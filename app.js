/*var n1 = 10
var n2 = 'teste'

if(n1 < 10){
    console.log('n1 menor que 10')
}else{
    console.log('n1 igual ou maior que 10')
}

for (var n3 = 0; n3 <= 10; n3++){
    console.log('n3: ' + n3)
}

var n4 = 0

while(n4 <= 10){
    console.log('n4: ' + n4)
    n4++
}*/

const express = require("express")//importação do modulo do express
const app = express()// utilizao dentro da constante app

app.listen(8081, function(){
    console.log("servidor rodando na porta 8081")
})//8081 é a porta, criando o servidor web coma porta
//function para quando rodar, nao ficar vendo apenas o negocio piscando, vai aparece
//a mensagem

app.get("/", function(req, res){
    res.end("Pag inicial")//exibindo na web
})


app.get('/cadastrar/:produto', function(req, res){
    res.send("Nome do Produto: " + req.params.produto )//pegando e exibindo o parametro
})

app.get('/pesquisar/:produto/:modelo', function(req, res){
    res.send("Nome do Produto: " + req.params.produto + "<br>Modelo do Produto: " + req.params.modelo)//pegando e exibindo o parametro
})

app.get('/contato/:sac/:produto', function(req, res){
    res.send("Sac: " + req.params.sac + "<br>Nome do Produto: " + req.params.produto)//pegando e exibindo o parametro
})

/*
app.get("/cadastrar:item", function(req, res){
    res.end(req.params)//pegando e exibindo o parametr
})//parametro -> item*/

//MAS NESSE É PARA EXIBIR O QUE A PESSOA COLOCAR
// ALGO NA FRENTE DA ROTA
/*app.get("/cadastrar/:item/:outroitem", function(req, res){
    res.send("1° item: " + req.params.item + "<br><br>2° item: " + req.params.outroitem)//pegando e exibindo o parametro
})//parametro -> item, 
*/





