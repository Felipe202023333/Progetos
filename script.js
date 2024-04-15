let chave =""

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector('cidade').innerHTML = 'Tempo em' + dados.name
    document.querySelector('tem').innerHTML = Math.floor(dados.main.temp) + '°C'
}

function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value
   buscarCidade()
}
async function buscarCidade(){
    let dados = await fetch("").then(resposta => resposta.json())
    console.log(dados)
}