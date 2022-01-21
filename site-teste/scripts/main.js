let minhaImagem = document.querySelector('img')

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
      if(meuSrc === 'imagens/firefox.jpg') {
      minhaImagem.setAttribute ('src','imagens/firefox2.jpg');
      } else {
      minhaImagem.setAttribute ('src','imagens/firefox.jpg');
    }
}

var meuButton = document.querySelector('button')
var meuCabecalho = document.querySelector('h1')

function defineNomeUsuario(){
  var nomeUsuario = prompt ('Por favor, digite o seu nome!')
  localStorage.setItem('nome-usuario', nomeUsuario)
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeUsuario
}

if(localStorage.getItem('nome-usuario')){
  defineNomeUsuario()
}else{
  var nomeSalvo = localStorage.getItem('nome-usuario')
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeSalvo
}

meuButton.onclick = function(){
  defineNomeUsuario()
}