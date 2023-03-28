var deslizar = document.querySelector('#deslizar')
var botao = document.querySelector('#botao')
var senhaGerada = document.querySelector('#senhaGerada')
var char = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWZ123456789*@!"

var legenda = document.querySelector('#legenda')

legenda.innerHTML = deslizar.value

deslizar.oninput = function(){
     legenda.innerHTML = this.value
}

botao.addEventListener('click', gerarSenha)

function gerarSenha(){
    var senha = ""
    for(var i = 0, n = char.length; i < deslizar.value; ++i){
        //senha += char.charAt(Math.floor(Math.random() * n))
        senha = senha + char.charAt(Math.random() * n)

       
    }

   
    senhaGerada.innerHTML = senha
}