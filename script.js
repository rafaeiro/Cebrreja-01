
let check01 = window.document.querySelector(".ceb-23")
check01.style.width = '346px'
let check02 = window.document.querySelector(".ceb-33")
let check03 = window.document.querySelector(".ceb-43")
let check04 = window.document.querySelector(".ceb-53")
let check05 = window.document.querySelector(".ceb-63")
let check06 = window.document.querySelector(".ceb-73")
let check07 = window.document.querySelector(".ceb-83")
var btn = document.getElementById("botao")

var span1 = window.document.querySelector(".s23")
span1.dataset.content = 'CeBRreja 23 Extra Light Wide'
var span2 = window.document.querySelector(".s33")
span2.dataset.content = 'CeBRreja 33 Light Wide'
var span3 = window.document.querySelector(".s43")
span3.dataset.content = 'CeBRreja 43 Wide'
var span4 = window.document.querySelector(".s53")
span4.dataset.content = 'C 53 Medium Wd'
var span5 = window.document.querySelector(".s63")
span5.dataset.content = 'C 63 Bold Wd'
var span6 = window.document.querySelector(".s73")
span6.dataset.content = 'C 73 Hv Wd'
var span7 = window.document.querySelector(".s83")
span7.dataset.content = '83 Bc Wd'

btn.addEventListener("click", reverter);

function reverter(){

    if(check01.style.width === '346px'){  
    check01.style.width = '366px'
    check01.style.background = 'bottom center url(imagens/BR-83b.png) no-repeat'
    span1.dataset.content = 'Cebrreja 43 Wide';
    check02.style.width = '204px'
    check02.style.background = 'bottom center url(imagens/BR-73b.png) no-repeat'
    span2.dataset.content = 'Cebrreja 43 Wide';
    check03.style.width = '118px'
    check03.style.background = 'bottom center url(imagens/BR-63b.png) no-repeat'
    span3.dataset.content = 'Cebrreja 43 Wide';
    check04.style.width = '76px'
    check04.style.background = 'bottom center url(imagens/BR-53b.png) no-repeat'
    span4.dataset.content = 'Cebrreja 43 Wide';
    check05.style.width = '49px'
    check05.style.background = 'bottom center url(imagens/BR-43b.png) no-repeat'
    span5.dataset.content = 'Cebr 43 Wide';
    check06.style.width = '43px'
    check06.style.background = 'bottom center url(imagens/BR-33b.png) no-repeat'
    span6.dataset.content = '43 Wide';
    check07.style.width = '40px'
    check07.style.background = 'bottom center url(imagens/BR-23b.png) no-repeat'
    span7.dataset.content = '43';
    }else{
    check01.style.width = '346px'
    check01.style.background = 'bottom center url(imagens/BR-23.png) no-repeat'
    check02.style.width = '246px'
    check02.style.background = 'bottom center url(imagens/BR-33.png) no-repeat'
    check03.style.width = '148px'
    check03.style.background = 'bottom center url(imagens/BR-43.png) no-repeat'
    check04.style.width = '97px'
    check04.style.background = 'bottom center url(imagens/BR-53.png) no-repeat'
    check05.style.width = '64px'
    check05.style.background = 'bottom center url(imagens/BR-63.png) no-repeat'
    check06.style.width = '47px'
    check06.style.background = 'bottom center url(imagens/BR-73.png) no-repeat'
    check07.style.width = '47px'
    check07.style.background = 'bottom center url(imagens/BR-83.png) no-repeat'
    } 
}