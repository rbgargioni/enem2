
var menuArtes = document.getElementById("ARTES");
menuArtes.style.display = "none";
artesano1.style.display = "none";
artesano2.style.display = "none";
artesano3.style.display = "none";
biologiano1.style.display = "none";


// Função que verifica o fragmento da URL para executar a função correspondente
function verificarFragmento() {
    // Obtém o fragmento da URL
    const fragmento = window.location.hash.substring(1); // Remove o '#'
    
    // Verifica se o fragmento está presente
    if (fragmento) {
        // Verifica se a função existe antes de chamá-la
        if (typeof window[fragmento] === 'function') {
            window[fragmento]();
        } else {
            console.error('Função não encontrada:', fragmento);
        }
    }
}
// função de cliques para compartilhamento
function executarArtesano1() { clickMenu1(); artesvolume1();} 
function executarArtesano2() { clickMenu1(); artesvolume2();} 


///////////////////// Menu de Artes////////////////////////////// 
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
   // window.location.hash = 'artesvolume1';
    artesano1.style.display = "block";
    aulasartes.style.display = "none";
}
function artesvolume2(){
    artesano2.style.display = "block";
    aulasartes.style.display = "none";
}


///////////////////// Menu de Biologia//////////////////////////////
function clickMenu2() {
    var menuBiologia = document.getElementById("BIOLOGIA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuBiologia).display !== "none";

    // Alterna a visibilidade do menu
    menuBiologia.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuBiologia.style.display = "block";
}

function biologiaAno1(){
    biologiano1.style.display = "block";
    aulasbiologia.style.display = "none";
}
function biologiaAno2(){
    biologiano2.style.display = "block";
    aulasbiologia.style.display = "none";
}
function biologiaAno3(){
    biologiano3.style.display = "block";
    aulasbiologia.style.display = "none";
}
function voltar() {
    window.location.reload();
}
function voltar2(){
    var menuArtes = document.getElementById("ARTES");
    menuArtes.style.display = "none";
    menuprincipal.style.display = "block";
    var elementosDescricao = document.getElementsByClassName("descricao");

for (var i = 0; i < elementosDescricao.length; i++) {
    elementosDescricao[i].style.display = "none";
}
    var menuBiologia = document.getElementById("BIOLOGIA");
    menuBiologia.style.display = "none";
    menuprincipal.style.display = "block";
    var elementosDescricao = document.getElementsByClassName("descricao");

for (var i = 0; i < elementosDescricao.length; i++) {
    elementosDescricao[i].style.display = "none";
}
}
verificarFragmento();

 
