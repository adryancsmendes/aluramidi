//
function tocaSom (seletorAudio) {//criamos uma função com parâmetro genérico
    const elemento = document.querySelector(seletorAudio);//utilizamos a função play para reproduzir o som do parâmetro recebido
    if(elemento && elemento.localName == 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');//criamos a ponte entre nosso HTML e nosso JavaScript

for(let i = 0; i < listaDeTeclas.length; i++){//utilizamos o for para percorrer cada elemento da nossa lista
    
    const tecla = listaDeTeclas[i];//acessamos cada tecla dentro da lista de teclas e atribuimos cada uma à const tecla
    const instrumento = tecla.classList[1];//acessamos a classe de índice 1 em cada tecla
    //template sting
    const idAudio = `#som_${instrumento}`;//utilizamos uma template string que será auto-completada com a classe índice 1 de cada tecla à cada loop

    tecla.onclick = function () {//atribuímos uma função anônima ao clique, assim não incorremos no erro de executar uma mídia antes da interação com o usuário
        tocaSom(idAudio);//chamamos nossa função dentro da função anônima, esta será executada somente no momento do clique da tecla. O idAudio é passado como parâmetro dessa função, assim nossa função tocaSom receberá a tecla que estamos pressionando.
    }

    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
