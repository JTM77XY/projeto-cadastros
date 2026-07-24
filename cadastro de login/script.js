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


function login(){
 const dadoslogin = {
     nome: document.getElementById('input-usuario').value,
     senha: document.getElementById('input-senha').value,
 }

 for(let i = 0; i<cadastro.length; i++){
   if(dadoslogin.nome == cadastro[i].nome || dadoslogin.nome == cadastro[i].email && dadoslogin.senha == cadastro[i].senha){
    window.location.href = "http://127.0.0.1:5500/index.html"
   }else{
    alert('asseso negado')
   }

 }
}