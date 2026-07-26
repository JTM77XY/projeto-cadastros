let produtos = []  // array onde os dados digitados nos inputs vão ser armazenados.


function limparformulario(){ // essa função limpa o formulario
  document.getElementById('informarproduto').value = ''
  document.getElementById('input-produto').value = ''
  document.getElementById('input-marca').value = ''
  Number(document.getElementById('input-quantidade').value = '')
  Number(document.getElementById('input-preco').value = '')
  Number(document.getElementById('input-minimo').value = '')
  Number(document.getElementById('input-maximo').value = '')
}


function cadastrarproduto(){ // essa função joga as informações digitadas nos inputs para dentro do array 'produtos'.
    const novoproduto = {
        id: Date.now(),
        produto: document.getElementById('input-produto').value,
        marca: document.getElementById('input-marca').value,
        quantidade: Number(document.getElementById('input-quantidade').value),
        preco: Number(document.getElementById('input-preco').value),
        minimo: Number(document.getElementById('input-minimo').value),
        maximo: Number(document.getElementById('input-maximo').value),
    }
    produtos.push(novoproduto)
    limparformulario()
    console.log(produtos)
}


function pesquisar(){ // essa função pega informações especificas que ja estão dentro do array 'produtos' e escreve essas informações nos inputs.
 let produtopesquisado = document.getElementById('informarproduto').value
 for(let i = 0; i<produtos.length; i++){
    if(produtopesquisado == produtos[i].produto){
         document.getElementById('input-produto').value = produtos[i].produto
         document.getElementById('input-marca').value = produtos[i].marca
         Number(document.getElementById('input-quantidade').value = produtos[i].quantidade) 
         Number(document.getElementById('input-preco').value = produtos[i].preco) 
         Number(document.getElementById('input-minimo').value = produtos[i].minimo) 
         Number(document.getElementById('input-maximo').value = produtos[i].maximo) 
    }

 }
}



function atualizar(){}




function escluir(){}

