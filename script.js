
let check01 = window.document.querySelector(".ceb-23")
let check02 = window.document.querySelector(".ceb-33")
let check03 = window.document.querySelector(".ceb-43")
let check04 = window.document.querySelector(".ceb-53")
let check05 = window.document.querySelector(".ceb-63")
let check06 = window.document.querySelector(".ceb-73")
let check07 = window.document.querySelector(".ceb-83")
var btn = document.getElementById("botao");
btn.addEventListener("click", reverter);
function reverter(){
    if(check01.style.width == '409px'){  
    check01.style.width = '440px'
    check01.style.background = 'bottom center url(imagens/BR-83b.png) no-repeat'
    span.dataset.content = 'alterei o data set'
    check02.style.width = '254px'
    check02.style.background = 'bottom center url(imagens/BR-73b.png) no-repeat'
    check03.after.contente='Cebrreja 43 Wide'
    check03.style.width = '168px'
    check03.style.background = 'bottom center url(imagens/BR-63b.png) no-repeat'

    check04.style.width = '126px'
    check04.style.background = 'bottom center url(imagens/BR-53b.png) no-repeat'
    check05.style.width = '89px'
    check05.style.background = 'bottom center url(imagens/BR-43b.png) no-repeat'
    check06.style.width = '73px'
    check06.style.background = 'bottom center url(imagens/BR-33b.png) no-repeat'
    check07.style.width = '44px'
    check07.style.background = 'bottom center url(imagens/BR-23b.png) no-repeat'
    }else{
    check01.style.width = '409px'
    check01.style.background = 'bottom center url(imagens/BR-23.png) no-repeat'
    check02.style.width = '254px'
    check02.style.background = 'bottom center url(imagens/BR-33.png) no-repeat'
    check03.after.contente='Cebrreja 43 Wide'
    check03.style.width = '168px'
    check03.style.background = 'bottom center url(imagens/BR-43.png) no-repeat'

    check04.style.width = '126px'
    check04.style.background = 'bottom center url(imagens/BR-53.png) no-repeat'
    check05.style.width = '89px'
    check05.style.background = 'bottom center url(imagens/BR-63.png) no-repeat'
    check06.style.width = '73px'
    check06.style.background = 'bottom center url(imagens/BR-73.png) no-repeat'
    check07.style.width = '44px'
    check07.style.background = 'bottom center url(imagens/BR-83.png) no-repeat'
    } 
}