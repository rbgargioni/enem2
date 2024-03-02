
var menuArtes = document.getElementById("ARTES");
menuArtes.style.display = "none";
artesano1.style.display = "none";
artesano2.style.display = "none";
artesano3.style.display = "none";
biologiano1.style.display = "none";
valumes.style.display = "none";


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
   // artes.style.display = "none";
    valumes.style.display = "block";
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

///////////////////// Menu de ED FISICA//////////////////////////////
function clickMenu3() {
    var menuEdfisica = document.getElementById("EDFISICA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuEdfisica).display !== "none";

    // Alterna a visibilidade do menu
    menuEdfisica.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuEdfisica.style.display = "block";
}

function edFisicaAno1(){
    edFisicano1.style.display = "block";
    aulasedfisica.style.display = "none";
}
function edFisicaAno2(){
    edFisicano2.style.display = "block";
    aulasedfisica.style.display = "none";
}
function edFisicaAno3(){
    edFisicano3.style.display = "block";
    aulasedfisica.style.display = "none";
}
function voltar() {
    window.location.reload();
}


///////////////////// Menu de Espanhol//////////////////////////////
function clickMenu4() {
    var menuEspanhol = document.getElementById("ESPANHOL");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuEspanhol).display !== "none";

    // Alterna a visibilidade do menu
    menuEspanhol.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuEspanhol.style.display = "block";
}

function espanholAno1(){
    espanhol_ano1.style.display = "block";
    aulasespanhol.style.display = "none";
}
function espanholAno2(){
    espanhol_ano2.style.display = "block";
    aulasespanhol.style.display = "none";
}

///////////////////// Menu de Filisofia//////////////////////////////
function clickMenu5() {
    var menuFilosofia = document.getElementById("FILOSOFIA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuFilosofia).display !== "none";

    // Alterna a visibilidade do menu
    menuFilosofia.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuFilosofia.style.display = "block";
}

function filosofiaAno1(){
    filoAno1.style.display = "block";
    aulasfilosofia.style.display = "none";
}
function filosofiaAno2(){
    filoAno2.style.display = "block";
    aulasfilosofia.style.display = "none";
}
function filosofiaAno3(){
    filoAno3.style.display = "block";
    aulasfilosofia.style.display = "none";
}

///////////////////// Menu de FISICA//////////////////////////////
function clickMenu6() {
    var menuFisica = document.getElementById("FISICA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuFisica).display !== "none";

    // Alterna a visibilidade do menu
    menuFisica.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuFisica.style.display = "block";
}

function fisiAno1(){
    fisicaAno1.style.display = "block";
    aulasfisica.style.display = "none";
}
function fisiAno2(){
    fisicaAno2.style.display = "block";
    aulasfisica.style.display = "none";
}
function fisiAno3(){
    fisicaAno3.style.display = "block";
    aulasfisica.style.display = "none";
}

///////////////////// Menu de GEOGRAFIA//////////////////////////////
function clickMenu7() {
    var menuGEO = document.getElementById("GEOGRAFIA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuGEO).display !== "none";

    // Alterna a visibilidade do menu
    menuGEO.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuGEO.style.display = "block";
}

function geoAno1(){
    geografiaAno1.style.display = "block";
    aulasgeografia.style.display = "none";
}
function geoAno2(){
    geografiaAno2.style.display = "block";
    aulasgeografia.style.display = "none";
}
function geoAno3(){
    geografiaAno3.style.display = "block";
    aulasgeografia.style.display = "none";
}
///////////////////// Menu de HISTORIA//////////////////////////////
function clickMenu8() {
    var menuHis = document.getElementById("HISTORIA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuHis).display !== "none";

    // Alterna a visibilidade do menu
    menuHis.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuHis.style.display = "block";
}

function histAno1(){
    historiaAno1.style.display = "block";
    aulashistoria.style.display = "none";
}
function histAno2(){
    historiaAno2.style.display = "block";
    aulashistoria.style.display = "none";
}
function histAno3(){
    historiaAno3.style.display = "block";
    aulashistoria.style.display = "none";
}
///////////////////// Menu de INGLES//////////////////////////////
function clickMenu9() {
    var menuing = document.getElementById("INGLES");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuing).display !== "none";

    // Alterna a visibilidade do menu
    menuing.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuing.style.display = "block";
}

function ingAno1(){
    inglesAno1.style.display = "block";
    aulasingles.style.display = "none";
}
function ingAno2(){
    inglesAno2.style.display = "block";
    aulasingles.style.display = "none";
}
function ingAno3(){
    inglesAno3.style.display = "block";
    aulasingles.style.display = "none";
}

///////////////////// Menu de LITERATURA//////////////////////////////
function clickMenu10() {
    var menuLit = document.getElementById("LITERATURA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuLit).display !== "none";

    // Alterna a visibilidade do menu
    menuLit.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuLit.style.display = "block";
}

function litAno1(){
    literaturaAno1.style.display = "block";
    aulasliteratura.style.display = "none";
}
function litAno2(){
    literaturaAno2.style.display = "block";
    aulasliteratura.style.display = "none";
}
function litAno3(){
    literaturaAno3.style.display = "block";
    aulasliteratura.style.display = "none";
}

verificarFragmento();

 
