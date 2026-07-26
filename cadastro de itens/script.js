let produtos = []  // array onde os dados digitados nos inputs vão ser armazenados.


function limparformulario(){ // essa função limpa o formulario
  document.getElementById('IDunico').value = ''
  document.getElementById('informarproduto').value = ''
  document.getElementById('input-produto').value = ''
  document.getElementById('input-marca').value = ''
  document.getElementById('input-quantidade').value = ''
  document.getElementById('input-preco').value = ''
  document.getElementById('input-minimo').value = ''
  document.getElementById('input-maximo').value = ''
}


function cadastrarproduto(){ // essa função joga as informações digitadas nos inputs para dentro do array 'produtos'.
    const novoproduto = {
        id: Date.now(),
        produto: document.getElementById('input-produto').value,
        marca: document.getElementById('input-marca').value,
        quantidade: Number(document.getElementById('input-quantidade').value),
        preco: Number(document.getElementById('input-preco').value),
        minimo: Number(document.getElementById('input-minimo').value),
        maximo: Number(document.getElementById('input-maximo').value)
    }
    produtos.push(novoproduto)
    limparformulario()
    console.log(produtos)
}


function pesquisar(){ // essa função pega informações especificas que ja estão dentro do array 'produtos' e escreve essas informações nos inputs.
 let produtopesquisado = document.getElementById('informarproduto').value
 for(let i = 0; i<produtos.length; i++){
    if(produtopesquisado == produtos[i].produto){
         document.getElementById('IDunico').value = produtos[i].id
         document.getElementById('input-produto').value = produtos[i].produto
         document.getElementById('input-marca').value = produtos[i].marca
         document.getElementById('input-quantidade').value = produtos[i].quantidade
         document.getElementById('input-preco').value = produtos[i].preco
         document.getElementById('input-minimo').value = produtos[i].minimo
         document.getElementById('input-maximo').value = produtos[i].maximo 
    }
 }
}



function atualizar(){
 let IDproduto = Number(document.getElementById('IDunico').value)
 for(let i = 0; i < produtos.length; i++){
    if(IDproduto == produtos[i].id){
       produtos[i].id = document.getElementById('IDunico').value
       produtos[i].produto = document.getElementById('input-produto').value
       produtos[i].marca = document.getElementById('input-marca').value
       produtos[i].quantidade = document.getElementById('input-quantidade').value
       produtos[i].preco = document.getElementById('input-preco').value
       produtos[i].minimo = document.getElementById('input-minimo').value
       produtos[i].maximo = document.getElementById('input-maximo').value
    }
 }
 console.log(produtos)
 limparformulario()
}



function escluir(){
 let IDproduto = Number(document.getElementById('IDunico').value)
 for(let i = 0; i<produtos.length; i++){
     if(IDproduto == produtos[i].id){
        console.log(produtos[i])
        produtos.splice(i,1)
        
     }
 }
 limparformulario()
}

