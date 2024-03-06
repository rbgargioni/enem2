
//var menuArtes = document.getElementById("ARTES");
//menuArtes.style.display = "none";
//artesano1.style.display = "none";
//artesano2.style.display = "none";
//artesano3.style.display = "none";
//biologiano1.style.display = "none";
//valumes.style.display = "none";


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
// Artes//
function executarArtesano1() { clickMenu1(); artesvolume1();} 
function executarArtesano2() { clickMenu1(); artesvolume2();}
///BIOLOGIA
function executarbiologiano1() { clickMenu2(); biologiaAno1();} 
function executarbiologiano2() { clickMenu2(); biologiaAno2();} 
function executarbiologiano3() { clickMenu2(); biologiaAno3();} 
///Educação fisica
function executaredFisicano1() { clickMenu3(); edFisicaAno1();}
function executaredFisicano2() { clickMenu3(); edFisicaAno2();}
function executaredFisicano3() { clickMenu3(); edFisicaAno3();}
///Educação Espanhol
function executarespanhol_ano1() { clickMenu4(); espanholAno1();}
function executarespanhol_ano2() { clickMenu4(); espanholAno2();}
///Educação FILOSOFIA
function executarfiloAno1() { clickMenu5(); filosofiaAno1();}
function executarfiloAno2() { clickMenu5(); filosofiaAno2();}
function executarfiloAno3() { clickMenu5(); filosofiaAno3();}
///Educação FISICA
function executarfisicaAno1() { clickMenu6(); fisiAno1();}
function executarfisicaAno2() { clickMenu6(); fisiAno2();}
function executarfisicaAno3() { clickMenu6(); fisiAno3();}
///Educação GEOGRAFIA
function executargeografiaAno1() { clickMenu7(); geoAno1();}
function executargeografiaAno2() { clickMenu7(); geoAno2();}
function executargeografiaAno3() { clickMenu7(); geoAno3();}
///Educação HISTORIA
function executarhistoriaAno1() { clickMenu8(); histAno1();}
function executarhistoriaAno2() { clickMenu8(); histAno2();}
function executarhistoriaAno3() { clickMenu8(); histAno3();}
///Educação INGLÊS
function executaringlesAno1() { clickMenu9(); ingAno1();}
function executaringlesAno2() { clickMenu9(); ingAno2();}
function executaringlesAno3() { clickMenu9(); ingAno3();}
///Educação LITERATURA
function executarliteraturaAno1() { clickMenu10(); litAno1();}
function executarliteraturaAno2() { clickMenu10(); litAno2();}
function executarliteraturaAno3() { clickMenu10(); litAno3();}
///Educação MATEMÁTICA
function executarmatematicaAno1() { clickMenu11(); matAno1();}
function executarmatematicaAno2() { clickMenu11(); matAno2();}
function executarmatematicaAno3() { clickMenu11(); matAno3();}
///Educação Português
function executarportuguesAno1() { clickMenu12(); porAno1();}
function executarportuguesAno2() { clickMenu12(); porAno2();}
///Educação QUÍMICA
function executarquimicaAno1() { clickMenu13(); quimAno1();}
function executarquimicaAno2() { clickMenu13(); quimAno2();}
function executarquimicaAno3() { clickMenu13(); quimAno3();}
///Educação REDAÇÃO
function executaredacaoAno1() { clickMenu14(); redAno1();}
function executaredacaoAno2() { clickMenu14(); redAno2();}
function executaredacaoAno3() { clickMenu14(); redAno3();}
///Educação SOCIOLOGIA
function executarsociologiaAno1() { clickMenu15(); socAno1();}
function executarsociologiaAno2() { clickMenu15(); socAno2();}
function executarsociologiaAno3() { clickMenu15(); socAno3();}



///////////////////// Menu de ARTES//////////////////////////////
function clickMenu1() {
    var menuArt = document.getElementById("ARTES");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuArt).display !== "none";

    // Alterna a visibilidade do menu
    menuArt.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuArt.style.display = "block";
}
function artesvolume1(){
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

///////////////////// Menu de Matematica//////////////////////////////
function clickMenu11() {
    var menuMate = document.getElementById("MATEMATICA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuMate).display !== "none";

    // Alterna a visibilidade do menu
    menuMate.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuMate.style.display = "block";
}

function matAno1(){
    matematicaAno1.style.display = "block";
    aulasmatematica.style.display = "none";
}
function matAno2(){
    matematicaAno2.style.display = "block";
    aulasmatematica.style.display = "none";
}
function matAno3(){
    matematicaAno3.style.display = "block";
    aulasmatematica.style.display = "none";
}

///////////////////// Menu de Portugues//////////////////////////////
function clickMenu12() {
    var menuPor = document.getElementById("PORTUGUES");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuPor).display !== "none";

    // Alterna a visibilidade do menu
    menuPor.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuPor.style.display = "block";
}

function porAno1(){
    portuguesAno1.style.display = "block";
    aulasPORTUGUES.style.display = "none";
}
function porAno2(){
    portuguesAno2.style.display = "block";
    aulasPORTUGUES.style.display = "none";
}

///////////////////// Menu de QUIMICA//////////////////////////////
function clickMenu13() {
    var menuquim = document.getElementById("QUIMICA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuquim).display !== "none";

    // Alterna a visibilidade do menu
    menuquim.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuquim.style.display = "block";
}

function quimAno1(){
    quimicaAno1.style.display = "block";
    aulasquimica.style.display = "none";
}
function quimAno2(){
    quimicaAno2.style.display = "block";
    aulasquimica.style.display = "none";
}
function quimAno3(){
    quimicaAno3.style.display = "block";
    aulasquimica.style.display = "none";
}

///////////////////// Menu de REDAÇÂO//////////////////////////////
function clickMenu14() {
    var menuredacao = document.getElementById("REDACAO");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menuredacao).display !== "none";

    // Alterna a visibilidade do menu
    menuredacao.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menuredacao.style.display = "block";
}

function redAno1(){
    redacaoAno1.style.display = "block";
    aulasredacao.style.display = "none";
}
function redAno2(){
    redacaoAno2.style.display = "block";
    aulasredacao.style.display = "none";
}
function redAno3(){
    redacaoAno3.style.display = "block";
    aulasredacao.style.display = "none";
}

///////////////////// Menu de SOCIOLOGIA//////////////////////////////
function clickMenu15() {
    var menusociologia = document.getElementById("SOCIOLOGIA");
    var menuPrincipal = document.getElementById("menuprincipal");
    // Verifica se o menu está visível
    var isVisible = window.getComputedStyle(menusociologia).display !== "none";

    // Alterna a visibilidade do menu
    menusociologia.style.display = isVisible ? "none" : "block";
    menuprincipal.style.display = "none";
    menusociologia.style.display = "block";
}

function socAno1(){
    sociologiaAno1.style.display = "block";
    aulassociologia.style.display = "none";
}
function socAno2(){
    sociologiaAno2.style.display = "block";
    aulassociologia.style.display = "none";
}
function socAno3(){
    sociologiaAno3.style.display = "block";
    aulassociologia.style.display = "none";
}



verificarFragmento();

 
