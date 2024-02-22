
var menuArtes = document.getElementById("ARTES");
menuArtes.style.display = "none";
artesano1.style.display = "none";
artesano2.style.display = "none";

function clickMenu1() {
    var menuArtes = document.getElementById("ARTES");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuArtes).display !== "none";

    // Alterna a visibilidade do menu
    menuArtes.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    aulasartes.style.display = "block";
}
function artesvolume1(){
    artesano1.style.display = "block";
    aulasartes.style.display = "none";
}
function artesvolume2(){
    artesano2.style.display = "block";
    aulasartes.style.display = "none";
}
function voltar(){
    var menuArtes = document.getElementById("ARTES");
    menuArtes.style.display = "none";
    menuprincipal.style.display = "block";
    var elementosDescricao = document.getElementsByClassName("descricao");

for (var i = 0; i < elementosDescricao.length; i++) {
    elementosDescricao[i].style.display = "none";
}
}


function clickMenu2(){
    if (ARTES.style.display == 'block'){
        ARTES.style.display = 'none'
    }
    else{
        ARTES.style.display = 'block'
        ARTES.style.display = 'none'
        ARTES.style.display = 'none'
    }
}
 
function clickMenu2(){
    if (menu2.style.display == 'block'){
        menu2.style.display = 'none'
    }
    else{
        menu.style.display = 'none'
        menu2.style.display = 'block'
        menu3.style.display = 'none'
    }
}

function clickMenu3(){
    if (menu3.style.display == 'block'){
        menu3.style.display = 'none'
    }
    else{
        menu.style.display = 'none'
        menu2.style.display = 'none'
        menu3.style.display = 'block'
    }
}
 
