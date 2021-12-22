function createList(quantidade, nome){
  
  for (let i = 0; i < quantidade; i++) {
    if (nome === undefined) {
      nome = "Text"
    }
  }

  var lista = document.createElement("ul")
  document.getElementById("lista").appendChild(lista)

  for(let cont = 0; cont < quantidade; cont++){
    var item = document.createElement("li")
    lista.appendChild(item)
    var mensagem = document.createTextNode(nome + ' ' + (cont + 1))
    item.appendChild(mensagem)
  }
}
createList(5, "Item")   
