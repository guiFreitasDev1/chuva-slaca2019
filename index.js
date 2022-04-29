function leiaMais(){
    var pontos = document.getElementById("pontos")
    var maisTexto = document.getElementById("mais")
    var btnLeiaMais = document.getElementById("btnLeiaMais")
    var menuSlacaShadow = document.querySelector('.menuSlacaShadow')

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML="Leia Mais";
        menuSlacaShadow.style.height = '1450px'

    }
    else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML="Leia menos";
        menuSlacaShadow.style.height = '1870px'
    }
}

function topico(){
    var textDiscussoesOff = document.querySelector('.textDiscussoesOff')
    var enviarTopico = document.querySelector('.enviarTopico')
    
    if (enviarTopico.style.display === 'none'){
        enviarTopico.style.display = 'inline'
        textDiscussoesOff.style.display = 'none'
    }else{
        enviarTopico.style.display = 'none'
        textDiscussoesOff.style.display = 'inline'
    }

}

function enviarDisc(){
    var enviadoNovoTopico = document.querySelector('.enviadoNovoTopico')
    var enviarTopico = document.querySelector('.enviarTopico')
    var buttonEnviarTopico = document.querySelector('.buttonEnviarTopico')

    if (enviarTopico.style.display === 'inline'){
        enviarTopico.style.display = 'none'
        enviadoNovoTopico.style.display = 'inline'
        
    }else{
        enviarTopico.style.display = 'inline'
        enviadoNovoTopico.style.display = 'none'
        
    }


}
function comentario(){
    sumirComentario = document.querySelector('.sumirComentario')
    buttonLerMaisComentarios = document.querySelector('.buttonLerMaisComentarios')

    if(sumirComentario.style.display === 'none'){
        sumirComentario.style.display = 'inline'
        buttonLerMaisComentarios.innerHTML = "Ler menos"
    }else{
        sumirComentario.style.display = 'none'
        buttonLerMaisComentarios.innerHTML = "Leia mais"
}
}