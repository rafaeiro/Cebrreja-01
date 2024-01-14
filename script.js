
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
    span1.dataset.content = 'CeBRreja 43 Wide';
    check02.style.width = '204px'
    check02.style.background = 'bottom center url(imagens/BR-73b.png) no-repeat'
    span2.dataset.content = 'CeBRreja 43 Wide';
    check03.style.width = '118px'
    check03.style.background = 'bottom center url(imagens/BR-63b.png) no-repeat'
    span3.dataset.content = 'CeBRreja 43 Wide';
    check04.style.width = '76px'
    check04.style.background = 'bottom center url(imagens/BR-53b.png) no-repeat'
    span4.dataset.content = 'CeBRreja 43 Wide';
    check05.style.width = '49px'
    check05.style.background = 'bottom center url(imagens/BR-43b.png) no-repeat'
    span5.dataset.content = 'CeBR 43 Wide';
    check06.style.width = '43px'
    check06.style.background = 'bottom center url(imagens/BR-33b.png) no-repeat'
    span6.dataset.content = '43 Wide';
    check07.style.width = '40px'
    check07.style.background = 'bottom center url(imagens/BR-23b.png) no-repeat'
    span7.dataset.content = '43';
    }else{
    check01.style.width = '346px'
    check01.style.background = 'bottom center url(imagens/BR-23.png) no-repeat'
    span1.dataset.content = 'CeBRreja 23 Extra Light Wide';
    check02.style.width = '246px'
    check02.style.background = 'bottom center url(imagens/BR-33.png) no-repeat'
    span2.dataset.content = 'CeBRreja 33 Light Wide';
    check03.style.width = '148px'
    check03.style.background = 'bottom center url(imagens/BR-43.png) no-repeat'
    span3.dataset.content = 'CeBRreja 43 Wide';
    check04.style.width = '97px'
    check04.style.background = 'bottom center url(imagens/BR-53.png) no-repeat'
    span4.dataset.content = 'C 53 Medium Wd';
    check05.style.width = '64px'
    check05.style.background = 'bottom center url(imagens/BR-63.png) no-repeat'
    span5.dataset.content = 'C 63 Bold Wd';
    check06.style.width = '47px'
    check06.style.background = 'bottom center url(imagens/BR-73.png) no-repeat'
    span6.dataset.content = 'C 73 Hv Wd';
    check07.style.width = '47px'
    check07.style.background = 'bottom center url(imagens/BR-83.png) no-repeat'
    span7.dataset.content = '83 Bc Wd';
    } 
}
check01.addEventListener("mouseover", inclinar23)
check01.addEventListener("mouseout", volta23)
check02.addEventListener("mouseover", inclinar33)
check02.addEventListener("mouseout", volta33)
check03.addEventListener("mouseover", inclinar43)
check03.addEventListener("mouseout", volta43)
check04.addEventListener("mouseover", inclinar53)
check04.addEventListener("mouseout", volta53)
check05.addEventListener("mouseover", inclinar63)
check05.addEventListener("mouseout", volta63)
check06.addEventListener("mouseover", inclinar73)
check06.addEventListener("mouseout", volta73)
check07.addEventListener("mouseover", inclinar83)
check07.addEventListener("mouseout", volta83)

check01.addEventListener("mouseover", inclinar23b)
check01.addEventListener("mouseout", volta23b)
check02.addEventListener("mouseover", inclinar33b)
check02.addEventListener("mouseout", volta33b)
check03.addEventListener("mouseover", inclinar43b)
check03.addEventListener("mouseout", volta43b)
check04.addEventListener("mouseover", inclinar53b)
check04.addEventListener("mouseout", volta53b)
check05.addEventListener("mouseover", inclinar63b)
check05.addEventListener("mouseout", volta63b)
check06.addEventListener("mouseover", inclinar73b)
check06.addEventListener("mouseout", volta73b)
check07.addEventListener("mouseover", inclinar83b)
check07.addEventListener("mouseout", volta83b)

function inclinar23(){
    if(check01.style.width === '346px'){
        check01.style.background = 'bottom center url(imagens/BR-24.png) no-repeat'
        span1.dataset.content = 'CeBRreja 24 Extra Light Wide It'
    }  
}
function volta23(){
    if(span1.dataset.content === 'CeBRreja 24 Extra Light Wide It'){
        check01.style.background = 'bottom center url(imagens/BR-23.png) no-repeat'
        span1.dataset.content = 'CeBRreja 23 Extra Light Wide'}
}
function inclinar33(){
    if(check02.style.width === '246px'){
        check02.style.background = 'bottom center url(imagens/BR-34.png) no-repeat'
        span2.dataset.content = 'CeBRreja 34 Light Wide It'
    }  
}
function volta33(){
    if(span2.dataset.content === 'CeBRreja 34 Light Wide It'){
        check02.style.background = 'bottom center url(imagens/BR-33.png) no-repeat'
        span2.dataset.content = 'CeBRreja 33 Light Wide'}
}
function inclinar43(){
    if(check03.style.width === '148px'){
        check03.style.background = 'bottom center url(imagens/BR-44.png) no-repeat'
        span3.dataset.content = 'CeBRreja 44 Wide It'
    }  
}
function volta43(){
    if(span3.dataset.content === 'CeBRreja 44 Wide It'){
        check03.style.background = 'bottom center url(imagens/BR-43.png) no-repeat'
        span3.dataset.content = 'CeBRreja 43 Wide'}
}
function inclinar53(){
    if(check04.style.width === '97px'){
        check04.style.background = 'bottom center url(imagens/BR-54.png) no-repeat'
        span4.dataset.content = 'C 54 Medium Wd It'
    }  
}
function volta53(){
    if(span4.dataset.content === 'C 54 Medium Wd It'){
        check04.style.background = 'bottom center url(imagens/BR-53.png) no-repeat'
        span4.dataset.content = 'C 53 Medium Wd'}
}
function inclinar63(){
    if(check05.style.width === '64px'){
        check05.style.background = 'bottom center url(imagens/BR-64.png) no-repeat'
        span5.dataset.content = 'C 64 Bold Wd It'
    }  
}
function volta63(){
    if(span5.dataset.content === 'C 64 Bold Wd It'){
        check05.style.background = 'bottom center url(imagens/BR-63.png) no-repeat'
        span5.dataset.content = 'C 63 Bold Wd'}
}
function inclinar73(){
    if(check06.style.width === '47px'){
        check06.style.background = 'bottom center url(imagens/BR-74.png) no-repeat'
        span6.dataset.content = 'C 74 Wd It'
    }  
}
function volta73(){
    if(span6.dataset.content === 'C 74 Wd It'){
        check06.style.background = 'bottom center url(imagens/BR-73.png) no-repeat'
        span6.dataset.content = 'C 73 Wd'}
}
function inclinar83(){
    if(check07.style.width === '47px'){
        check07.style.background = 'bottom center url(imagens/BR-84.png) no-repeat'
        span7.dataset.content = '84 Wd It'
    }  
}
function volta83(){
    if(span7.dataset.content === '84 Wd It'){
        check07.style.background = 'bottom center url(imagens/BR-83.png) no-repeat'
        span7.dataset.content = '83 Wd'}
}
function inclinar23b(){
    if(check01.style.width === '366px'){
        check01.style.background = 'bottom center url(imagens/BR-84b.png) no-repeat'
        span1.dataset.content = 'CeBRreja 44 Wide It'
    }  
}
function volta23b(){
    if(span1.dataset.content === 'CeBRreja 44 Wide It'){
        check01.style.background = 'bottom center url(imagens/BR-83b.png) no-repeat'
        span1.dataset.content = 'CeBRreja 43 Wide'}
}
function inclinar33b(){
    if(check02.style.width === '204px'){
        check02.style.background = 'bottom center url(imagens/BR-74b.png) no-repeat'
        span2.dataset.content = 'CeBRreja 44 Wide It'
    }  
}
function volta33b(){
    if(span2.dataset.content === 'CeBRreja 44 Wide It'){
        check02.style.background = 'bottom center url(imagens/BR-73b.png) no-repeat'
        span2.dataset.content = 'CeBRreja 43 Wide'}
}
function inclinar43b(){
    if(check03.style.width === '118px'){
        check03.style.background = 'bottom center url(imagens/BR-64b.png) no-repeat'
        span3.dataset.content = 'CeBRreja 44 Wide It'
    }  
}
function volta43b(){
    if(span3.dataset.content === 'CeBRreja 44 Wide It'){
        check03.style.background = 'bottom center url(imagens/BR-63b.png) no-repeat'
        span3.dataset.content = 'CeBRreja 43 Wide'}
}
function inclinar53b(){
    if(check04.style.width === '76px'){
        check04.style.background = 'bottom center url(imagens/BR-54b.png) no-repeat'
        span4.dataset.content = 'CeBRreja 44 Wide It'
    }  
}
function volta53b(){
    if(span4.dataset.content === 'CeBRreja 44 Wide It'){
        check04.style.background = 'bottom center url(imagens/BR-53b.png) no-repeat'
        span4.dataset.content = 'CeBRreja 43 Wide'}
}
function inclinar63b(){
    if(check05.style.width === '49px'){
        check05.style.background = 'bottom center url(imagens/BR-44b.png) no-repeat'
        span5.dataset.content = 'CeBR 44 Wide It'
    }  
}
function volta63b(){
    if(span5.dataset.content === 'CeBR 44 Wide It'){
        check05.style.background = 'bottom center url(imagens/BR-43b.png) no-repeat'
        span5.dataset.content = 'CeBR 43 Wide'}
}
function inclinar73b(){
    if(check06.style.width === '43px'){
        check06.style.background = 'bottom center url(imagens/BR-34b.png) no-repeat'
        span6.dataset.content = 'C 44 Wd It'
    }  
}
function volta73b(){
    if(span6.dataset.content === 'C 44 Wd It'){
        check06.style.background = 'bottom center url(imagens/BR-33b.png) no-repeat'
        span6.dataset.content = 'C 43 Wd'}
}
function inclinar83b(){
    if(check07.style.width === '40px'){
        check07.style.background = 'bottom center url(imagens/BR-24b.png) no-repeat'
        span7.dataset.content = '44 Wd It'
    }  
}
function volta83b(){
    if(span7.dataset.content === '44 Wd It'){
        check07.style.background = 'bottom center url(imagens/BR-23b.png) no-repeat'
        span7.dataset.content = '43 Wd'}
}