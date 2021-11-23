function clickElemento(e){
    e.stopPropagation()
    alert("O elemento" + this.nodeName + "foi clicado!")
}

function focusElemento(e){
    //e.stopPropagation()
    this.classList.add('cor-fundo-azul')
}


function blurElemento(e){
    //e.stopPropagation()
    this.classList.remove('cor-fundo-azul')
}
//Evento disparado no termno da pagina
function bodyLoad(){
    document.querySelector("#msg-footer").innerText="Formulario Carregado com Sucesso!"
}

//função de tempo
function atualizaSpan(){
    let data=new Date()
    document.querySelector("#temporizado").innerText=data.toString()
}
//Usando forEach
/*forEach quando executado o programa ele não
vai esperar terminar o laço de repetição para
ir para linha de baixo*/


//Amarrações

var els=document.querySelectorAll(".clicavel")
els.forEach(el=>{
    el.addEventListener("click",clickElemento)
})

els=document.querySelectorAll(".focavel")
els.forEach(el=>{
    el.addEventListener("focus",focusElemento)
    el.addEventListener("blur",blurElemento)

})

els=document.querySelectorAll(".focavelin")
els.forEach(el=>{
    el.addEventListener("focusin",focusElemento)
    el.addEventListener("focusout",blurElemento)

})

//Amarrando o tempo
setInterval(atualizaSpan, 1000)
// Busca usando o For
/*O for ele so passa para a proxima linha assim
que terminar de executar o laço de repetição*/

/*
for (let i=0;i<els.length;i++){
    let el=els[i]
    el.addEventListener("click",clickElemento)
}*/