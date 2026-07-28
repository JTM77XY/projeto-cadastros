// let cadastro = []

// const dados = {
//      nome: 'jtm',
//      email: 'jean@gmail.com',
//      senha: 123,
// }
// cadastro.push(dados)
// console.log(cadastro)


// function login(){
//  const dadoslogin = {
//      nome: document.getElementById('input-usuario').value,
//      email: document.getElementById('input-email').value,
//      senha: document.getElementById('input-senha').value,
//  }

//  for(let i = 0; i<cadastro.length; i++){
//    if(dadoslogin.nome == cadastro[i].nome && dadoslogin.email == cadastro[i].email && dadoslogin.senha == cadastro[i].senha){
//     window.location.href = "https://store.steampowered.com/?l=portuguese"
//    }else{
//     alert('asseso negado')
//    }

//  }
// }

let cadastro = []

const dados = {
    nome: 'jtm',
    email: 'jean@gmail.com',
    senha: 123,
}
cadastro.push(dados)
console.log(cadastro)


function login(){ // essa função redireciona para outra página de os dados digitados nos inputs corresponderem aos dados da variavel const dados que está dentro so array cadastro.
  const dadoslogin = {
     nome: document.getElementById('input-usuario').value,
     senha: document.getElementById('input-senha').value,
 }

  for(let i = 0; i<cadastro.length; i++){
   if(dadoslogin.nome == cadastro[i].nome && dadoslogin.senha == cadastro[i].senha || dadoslogin.nome == cadastro[i].email && dadoslogin.senha == cadastro[i].senha){
    window.location.href = "http://127.0.0.1:5500/cadastro%20de%20itens/index.html"
   }else if(dadoslogin.nome == cadastro[i].nome && dadoslogin.senha != cadastro[i].senha || dadoslogin.nome == cadastro[i].email && dadoslogin.senha != cadastro[i].senha){
    alert('acesso negado')
   }

  }
  limparlogin()
}


function abrircadastro(){ // essa função faz aparecer tela de cadastro paara digitar os dados e jogar eles dentro do array cadastro.
   let nome = document.getElementById('input-usuario').value
   let senha = document.getElementById('input-senha').value

  if(nome == cadastro[0].nome && senha == cadastro[0].senha || nome == cadastro[0].email && senha == cadastro[0].senha){
    let abrir = document.getElementById('escondercadastro').style.display = 'block'
  }else{
      alert('acesso negado')
    }
    limparlogin()
}


function cadastrar(){
  const dados = {
    nome: document.getElementById('usuariocd').value,
    email: document.getElementById('emailcd').value,
    senha: Number(document.getElementById('senhacd').value),
 }
 cadastro.push(dados)
 limparcadastro()
}



function fecharcadastro(){
   let fechar = document.getElementById('escondercadastro').style.display = 'none'
}



function limparlogin(){
  document.getElementById('input-usuario').value = '',
  document.getElementById('input-senha').value = ''
}



function limparcadastro(){
    document.getElementById('usuariocd').value = '',
    document.getElementById('emailcd').value = '',
    document.getElementById('senhacd').value = ''
}