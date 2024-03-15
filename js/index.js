
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
function arte_antiga() { clickMenu1(); artesvolume1(); var secaoID = "arteantigav1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arte_classica() { clickMenu1(); artesvolume1(); var secaoID = "arte_classica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
// Volume2 
function artes_classica2() { clickMenu1(); artesvolume2(); var secaoID = "artes_classica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arte_moderna() { clickMenu1(); artesvolume2(); var secaoID = "arte_moderna_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arte_contemporanea() { clickMenu1(); artesvolume2(); var secaoID = "arte_contemporanea_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function cultura_artistica() { clickMenu1(); artesvolume2(); var secaoID = "cultura_artistica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///BIOLOGIA 1
function citologia2() { clickMenu2(); biologiaAno1(); var secaoID = "CITOLOGIA_II"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function origem_da_vida() { clickMenu2(); biologiaAno1(); var secaoID = "origem_da_vida"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function citologia1() { clickMenu2(); biologiaAno1(); var secaoID = "citologia_1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function bioquimica() { clickMenu2(); biologiaAno1(); var secaoID = "bioquimicav1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function imunilogia() { clickMenu2(); biologiaAno1(); var secaoID = "imunilogia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function reproducao_embriologia() { clickMenu2(); biologiaAno1(); var secaoID = "reproducao_embriologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function biodiversidade() { clickMenu2(); biologiaAno1(); var secaoID = "biodiversidade_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///BIOLOGIA 2  
function seres_vivos() { clickMenu2(); biologiaAno2(); var secaoID = "seres_vivos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function classificacao_morfologia() { clickMenu2(); biologiaAno2(); var secaoID = "classificacao_morfologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisiologia_reproducao() { clickMenu2(); biologiaAno2(); var secaoID = "fisiologia_reproducao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function zoologia() { clickMenu2(); biologiaAno2(); var secaoID = "zoologia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function microbiologia() { clickMenu2(); biologiaAno2(); var secaoID = "microbiologia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function anatomia_funcao() { clickMenu2(); biologiaAno2(); var secaoID = "anatomia_funcao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function corpo_humano() { clickMenu2(); biologiaAno2(); var secaoID = "corpo_humano_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function meio_ambiente() { clickMenu2(); biologiaAno2(); var secaoID = "meio_ambiente_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// BIOLOGIA 3
function celulas_tecidos() { clickMenu2(); biologiaAno3(); var secaoID = "celulas_tecidos_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hereditariedade() { clickMenu2(); biologiaAno3(); var secaoID = "hereditariedade_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ciencias_ambientais() { clickMenu2(); biologiaAno3(); var secaoID = "ciencias_ambientais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function suas_interacaoes() { clickMenu2(); biologiaAno3(); var secaoID = "suas_interacaoes_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function qualidade_vida() { clickMenu2(); biologiaAno3(); var secaoID = "qualidade_vida_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function animal_vegetal() { clickMenu2(); biologiaAno3(); var secaoID = "animal_vegetal_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação fisica
function biomecanica_e_saude() { clickMenu3(); edFisicaAno1(); var secaoID = "BIOMECANICA_E_SAUDE_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function discriminacao_e_inclusao2() { clickMenu3(); edFisicaAno2(); var secaoID = "discriminacao_e_inclusao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function discriminacao_e_inclusao3() { clickMenu3(); edFisicaAno3(); var secaoID = "discriminacao_e_inclusao_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///Educação Espanhol 
//Volume 1 
function texto_para_interpretar() { clickMenu4(); espanholAno1(); var secaoID = "texto_para_interpretar_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function texto_sobre_cultura() { clickMenu4(); espanholAno1(); var secaoID = "texto_sobre_cultura_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function anuncio_publicitario() { clickMenu4(); espanholAno1(); var secaoID = "anuncio_publicitario_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interesse_geral() { clickMenu4(); espanholAno1(); var secaoID = "interesse_geral_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function temas_polemicos() { clickMenu4(); espanholAno1(); var secaoID = "temas_polemicos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ampliar_cultura() { clickMenu4(); espanholAno1(); var secaoID = "ampliar_cultura_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
//Volume 2 
function algumas_questoes() { clickMenu4(); espanholAno2(); var secaoID = "algumas_questoes_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_texto() { clickMenu4(); espanholAno2(); var secaoID = "interpretacao_texto_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function questoes_gramaticais() { clickMenu4(); espanholAno2(); var secaoID = "questoes_gramaticais_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function poemas_textos() { clickMenu4(); espanholAno2(); var secaoID = "poemas_textos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function charge_texto() { clickMenu4(); espanholAno2(); var secaoID = "charge_texto_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function exprecoes_idiomatica() { clickMenu4(); espanholAno2(); var secaoID = "exprecoes_idiomatica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interacion_texto() { clickMenu4(); espanholAno2(); var secaoID = "interacion_texto_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }


///Educação FILOSOFIA

function conceitos_filosoficos() { clickMenu5(); filosofiaAno1(); var secaoID = "Conceitos_FilosoficosV1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function pre_socraticos() { clickMenu5(); filosofiaAno1(); var secaoID = "Pre_socraticosv1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function socrasticos() { clickMenu5(); filosofiaAno1(); var secaoID = "socrasticos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Filosofia volume 2 
function filosofia_classica() { clickMenu5(); filosofiaAno2(); var secaoID = "filosofia_classica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filosofia_medieval() { clickMenu5(); filosofiaAno2(); var secaoID = "filosofia_medieval_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filosofia_moderna() { clickMenu5(); filosofiaAno2(); var secaoID = "filosofia_moderna_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3 filo_escola_frankfurt_v3
function filosofia_conteporanea() { clickMenu5(); filosofiaAno3(); var secaoID = "filosofia_conteporanea_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filo_politica() { clickMenu5(); filosofiaAno3(); var secaoID = "filo_politica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filo_etica() { clickMenu5(); filosofiaAno3(); var secaoID = "filo_etica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function filo_escola_frankfurt() { clickMenu5(); filosofiaAno3(); var secaoID = "filo_escola_frankfurt_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///FISICA 

function mru_e_mruv() { clickMenu6(); fisiAno1(); var secaoID = "MRU_E_MRUV_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function gravitacao() { clickMenu6(); fisiAno1(); var secaoID = "gravitacao_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function mc_e_obriquo() { clickMenu6(); fisiAno1(); var secaoID = "MC_E_OBLIQUO_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function optica() { clickMenu6(); fisiAno1(); var secaoID = "optica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///volume 2
function optica_geometrica() { clickMenu6(); fisiAno2(); var secaoID = "optica_geometrica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function termologia() { clickMenu6(); fisiAno2(); var secaoID = "termologia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function calorimetria() { clickMenu6(); fisiAno2(); var secaoID = "calorimetria_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function termodin_mica() { clickMenu6(); fisiAno2(); var secaoID = "termodin_mica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function din_mica() { clickMenu6(); fisiAno2(); var secaoID = "din_mica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function din_mica2() { clickMenu6(); fisiAno2(); var secaoID = "din_mica2_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hidrodin_mica() { clickMenu6(); fisiAno2(); var secaoID = "hidrodin_mica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///volume 3 
function fisica_estatica() { clickMenu6(); fisiAno3(); var secaoID = "estatica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_hidrostatica() { clickMenu6(); fisiAno3(); var secaoID = "fisica_hidrostatica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function eletrodin_mica() { clickMenu6(); fisiAno3(); var secaoID = "eletrodin_mica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_eletrostatica() { clickMenu6(); fisiAno3(); var secaoID = "fisica_eletrostatica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_eletromagnetismo() { clickMenu6(); fisiAno3(); var secaoID = "fisica_eletromagnetismo_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function analise_dimencional() { clickMenu6(); fisiAno3(); var secaoID = "analise_dimencional_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fisica_moderna() { clickMenu6(); fisiAno3(); var secaoID = "fisica_moderna_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///Educação GEOGRAFIA 
function cartografia() { clickMenu7(); geoAno1(); var secaoID = "CARTOGRAFIA_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function clima() { clickMenu7(); geoAno1(); var secaoID = "clima_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geomorfologia() { clickMenu7(); geoAno1(); var secaoID = "geomorfologia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function recursos_hidricos() { clickMenu7(); geoAno1(); var secaoID = "recursos_hidricos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function dominios_morfoclimaticos() { clickMenu7(); geoAno1(); var secaoID = "dominios_morfoclimaticos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

/// volume 2
function geo_urbanizacao() { clickMenu7(); geoAno2(); var secaoID = "geo_urbanizacao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_industrializacao() { clickMenu7(); geoAno2(); var secaoID = "geo_industrializacao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function espaco_agrario() { clickMenu7(); geoAno2(); var secaoID = "espaco_agrario_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_demografia() { clickMenu7(); geoAno2(); var secaoID = "geo_demografia_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_migracao_v2() { clickMenu7(); geoAno2(); var secaoID = "geo_migracao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3

function geo_globalizacao() { clickMenu7(); geoAno3(); var secaoID = "geo_globalizacao_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geopolitica_externa() { clickMenu7(); geoAno3(); var secaoID = "geopolitica_externa_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geopolitica_interna() { clickMenu7(); geoAno3(); var secaoID = "geopolitica_interna_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function questoes_ambientais() { clickMenu7(); geoAno3(); var secaoID = "questoes_ambientais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fontes_energia() { clickMenu7(); geoAno3(); var secaoID = "fontes_energia_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tecnologia_trasporte() { clickMenu7(); geoAno3(); var secaoID = "tecnologia_trasporte_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geo_relacoa_trabalho() { clickMenu7(); geoAno3(); var secaoID = "geo_relacoa_trabalho_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }


///Educação HISTORIA  
function antiguidade() { clickMenu8(); histAno1(); var secaoID = "Antiguidade_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function grecia_roma_antiga() { clickMenu8(); histAno1(); var secaoID = "grecia_roma_antiga_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function periodo_medieval_europeu() { clickMenu8(); histAno1(); var secaoID = "periodo_medieval_europeu_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function modernidade_europeia() { clickMenu8(); histAno1(); var secaoID = "modernidade_europeia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function era_das_navegacoes() { clickMenu8(); histAno1(); var secaoID = "era_das_navegacoes_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function continente_africano() { clickMenu8(); histAno1(); var secaoID = "continente_africano_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// volume 2

function reformas_revolucao() { clickMenu8(); histAno2(); var secaoID = "reformas_revolucao_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function povos_originarios() { clickMenu8(); histAno2(); var secaoID = "povos_originarios_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function colonizacoes_pelo_atlantico() { clickMenu8(); histAno2(); var secaoID = "colonizacoes_pelo_atlantico_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function periodo_colonial_brasileiro() { clickMenu8(); histAno2(); var secaoID = "periodo_colonial_brasileiro_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function monarquias_nacionais() { clickMenu8(); histAno2(); var secaoID = "monarquias_nacionais_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function imperial_brasileiro() { clickMenu8(); histAno2(); var secaoID = "imperial_brasileiro_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function imperialismo_neocolonialismo() { clickMenu8(); histAno2(); var secaoID = "imperialismo_neocolonialismo_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// volume 3
function hist_brasil_republicano() { clickMenu8(); histAno3(); var secaoID = "hist_brasil_republicano_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_era_vargas() { clickMenu8(); histAno3(); var secaoID = "hist_era_vargas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_guerras_mundiais() { clickMenu8(); histAno3(); var secaoID = "hist_guerras_mundiais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_ditadura_militar_brasileira() { clickMenu8(); histAno3(); var secaoID = "hist_ditadura_militar_brasileira_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_breve_seculo_xx() { clickMenu8(); histAno3(); var secaoID = "hist_breve_seculo_xx_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_brasil_redemocratizacao() { clickMenu8(); histAno3(); var secaoID = "hist_brasil_redemocratizacao_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function hist_desafio_contemporaneos() { clickMenu8(); histAno3(); var secaoID = "hist_desafio_contemporaneos_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }


/// Educação INGLÊS 
function cartuns_charges() { clickMenu9(); ingAno1(); var secaoID = "cartuns_charges_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function infograficos() { clickMenu9(); ingAno1(); var secaoID = "infograficos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function informacoes_conhecimento() { clickMenu9(); ingAno1(); var secaoID = "informacoes_conhecimento_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2 
function letras_musicas_ing() { clickMenu9(); ingAno2(); var secaoID = "letras_musicas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function textos_curtos_ing() { clickMenu9(); ingAno2(); var secaoID = "textos_curtos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function literatura_destaque_ing() { clickMenu9(); ingAno2(); var secaoID = "literatura_destaque_ing_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3
function poema_e_proverbio_ing() { clickMenu9(); ingAno3(); var secaoID = "poema_e_proverbio_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function texto_variados_ing() { clickMenu9(); ingAno3(); var secaoID = "texto_variados_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function explorando_textos_variados_ing() { clickMenu9(); ingAno3(); var secaoID = "explorando_textos_variados_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function texto_variados_ing() { clickMenu9(); ingAno3(); var secaoID = "texto_variados_ing_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }


///Educação LITERATURA
function generos_literarios() { clickMenu10(); litAno1(); var secaoID = "generos_literarios_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function quinhentismo() { clickMenu10(); litAno1(); var secaoID = "quinhentismo_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function barroco() { clickMenu10(); litAno1(); var secaoID = "barroco_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function arcadismo_lit() { clickMenu10(); litAno1(); var secaoID = "arcadismo_lit_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function obras_literarias_lit() { clickMenu10(); litAno1(); var secaoID = "obras_literarias_lit_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///  Volume 2
function romantismo_literatura() { clickMenu10(); litAno2(); var secaoID = "romantismo_literatura_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function realismo_naturalismo_lit() { clickMenu10(); litAno2(); var secaoID = "realismo_naturalismo_lit_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function parnasianismo_simbolismo() { clickMenu10(); litAno2(); var secaoID = "parnasianismo_simbolismo_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function pre_modernismo() { clickMenu10(); litAno2(); var secaoID = "pre_modernismo_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function literarias_representativas() { clickMenu10(); litAno2(); var secaoID = "literarias_representativas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
// Volume 3  
function texto_literario_lit() { clickMenu10(); litAno3(); var secaoID = "texto_literario_lit_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function semana_arte_moderna() { clickMenu10(); litAno3(); var secaoID = "semana_arte_moderna_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geracao_30_45() { clickMenu10(); litAno3(); var secaoID = "geracao_30_45_lit"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function literatura_conteporanea() { clickMenu10(); litAno3(); var secaoID = "literatura_conteporanea_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function literarias_representativas_lit() { clickMenu10(); litAno3(); var secaoID = "literarias_representativas_lit_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

///Educação MATEMÁTICA  
function dados_estatisticos() { clickMenu11(); matAno1(); var secaoID = "dados_estatisticos_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function areas_volumes() { clickMenu11(); matAno1(); var secaoID = "areas_volumes_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function taxas_inflacao() { clickMenu11(); matAno1(); var secaoID = "taxas_inflacao_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geometricas_funcoes_mat() { clickMenu11(); matAno1(); var secaoID = "geometricas_funcoes_mat_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function funcao_polinominais_mat() { clickMenu11(); matAno1(); var secaoID = "funcao_polinominais_mat_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geometricas_especiais_mat() { clickMenu11(); matAno1(); var secaoID = "geometricas_especiais_mat_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///Volume 2
function porcentagem_proporcionalidade() { clickMenu11(); matAno2(); var secaoID = "porcentagem_proporcionalidade_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function progressoes_aritmeticas() { clickMenu11(); matAno2(); var secaoID = "progressoes_aritmeticas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function geometria_plana() { clickMenu11(); matAno2(); var secaoID = "geometria_plana_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function probabilidades_cotidiano() { clickMenu11(); matAno2(); var secaoID = "probabilidades_cotidiano_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function solidos_geometricos() { clickMenu11(); matAno2(); var secaoID = "solidos_geometricos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function resolucao_problemas() { clickMenu11(); matAno2(); var secaoID = "resolucao_problemas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///Volume 3
function variacoes_grandezas() { clickMenu11(); matAno3(); var secaoID = "variacoes_grandezas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function figuras_geometricas() { clickMenu11(); matAno3(); var secaoID = "figuras_geometricas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function simples_compostos_cotidiano() { clickMenu11(); matAno3(); var secaoID = "simples_compostos_cotidiano_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function problemas_envolvendo_operacoes() { clickMenu11(); matAno3(); var secaoID = "problemas_envolvendo_operacoes_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function fenomenos_periodicos_reais() { clickMenu11(); matAno3(); var secaoID = "fenomenos_periodicos_reais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estatisticos_analisados_interpretados() { clickMenu11(); matAno3(); var secaoID = "estatisticos_analisados_interpretados_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ladrilhamento_plano() { clickMenu11(); matAno3(); var secaoID = "ladrilhamento_plano_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function centrais_analise_tabelas() { clickMenu11(); matAno3(); var secaoID = "centrais_analise_tabelas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }


///Educação Português  
function adjetivo_pronome() { clickMenu12(); porAno1(); var secaoID = "adjetivo_pronome_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function verbos_adverbios() { clickMenu12(); porAno1(); var secaoID = "verbos_adverbios_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function figuras_linguagem() { clickMenu12(); porAno1(); var secaoID = "figuras_linguagem_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function pontuacao_port() { clickMenu12(); porAno1(); var secaoID = "pontuacao_port_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function variacao_linguistica_port() { clickMenu12(); porAno1(); var secaoID = "variacao_linguistica_port_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretaaoo_textual() { clickMenu12(); porAno1(); var secaoID = "interpretaaoo_textual_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2
function sujeito_predicado_port() { clickMenu12(); porAno2(); var secaoID = "sujeito_predicado_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function coesao_coerencia_port() { clickMenu12(); porAno2(); var secaoID = "coesao_coerencia_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function coordenadas_subordinadas_port() { clickMenu12(); porAno2(); var secaoID = "coordenadas_subordinadas_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tipos_texto_port() { clickMenu12(); porAno2(); var secaoID = "tipos_texto_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function variacao_linguistica_port() { clickMenu12(); porAno2(); var secaoID = "variacao_linguistica_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_textual_port() { clickMenu12(); porAno2(); var secaoID = "interpretacao_textual_port_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }


///Educação QUÍMICA
function propriedaes_da_materia() { clickMenu13(); quimAno1(); var secaoID = "propriedaes_da_materia_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrutura_atomica() { clickMenu13(); quimAno1(); var secaoID = "estrutura_atomica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tabela_periodica() { clickMenu13(); quimAno1(); var secaoID = "tabela_periodica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function ligacoes_quimicas_quim() { clickMenu13(); quimAno1(); var secaoID = "ligacoes_quimicas_quim_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function funcoes_inorg_nicas() { clickMenu13(); quimAno1(); var secaoID = "funcoes_inorg_nicas_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function reacoes_inorg_nicas() { clickMenu13(); quimAno1(); var secaoID = "reacoes_inorg_nicas_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2
function estequiometria_quim() { clickMenu13(); quimAno2(); var secaoID = "estequiometria_quim_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function solucoes_quim() { clickMenu13(); quimAno2(); var secaoID = "solucoes_quim_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function termoquimica_quim() { clickMenu13(); quimAno2(); var secaoID = "termoquimica_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function oxido_reducao_quim() { clickMenu13(); quimAno2(); var secaoID = "oxido_reducao_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function eletroquimica_quim() { clickMenu13(); quimAno2(); var secaoID = "eletroquimica_quim_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function cinetica_quimica() { clickMenu13(); quimAno2(); var secaoID = "cinetica_quimica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function enquilibrios_quimicos() { clickMenu13(); quimAno2(); var secaoID = "enquilibrios_quimicos_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3
function enquilibrios_quimicos_v3() { clickMenu13(); quimAno3(); var secaoID = "enquilibrios_quimicos_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function radioatividade_quimica() { clickMenu13(); quimAno3(); var secaoID = "radioatividade_quimica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function nomeclatura_funcao_org_nicas() { clickMenu13(); quimAno3(); var secaoID = "nomeclatura_funcao_org_nicas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function reacoes_org_nicas_quim() { clickMenu13(); quimAno3(); var secaoID = "reacoes_org_nicas_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function isomeria_quim() { clickMenu13(); quimAno3(); var secaoID = "isomeria_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function polimeros_quim() { clickMenu13(); quimAno3(); var secaoID = "polimeros_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function meio_ambiente_quim() { clickMenu13(); quimAno3(); var secaoID = "meio_ambiente_quim_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///Educação REDAÇÃO 
function variacao_linguistica() { clickMenu14(); redAno1(); var secaoID = "variacao_linguistica_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function redacao_generos_textuais() { clickMenu14(); redAno1(); var secaoID = "redacao_generos_textuais_V1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_analise_textual() { clickMenu14(); redAno1(); var secaoID = "interpretacao_analise_textual_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrategias_argumentativas() { clickMenu14(); redAno1(); var secaoID = "estrategias_argumentativas_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }

// volume 2
function variacao_linguistica() { clickMenu14(); redAno2(); var secaoID = "variacao_linguistica_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tipos_generos_textuais() { clickMenu14(); redAno2(); var secaoID = "tipos_generos_textuais_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_analise_textual_v2() { clickMenu14(); redAno2(); var secaoID = "interpretacao_analise_textual_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrategias_argumentativas_v2() { clickMenu14(); redAno2(); var secaoID = "estrategias_argumentativas_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
///Volume 3
function variacao_linguistica_v3() { clickMenu14(); redAno3(); var secaoID = "variacao_linguistica_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function tipos_generos_textuais_v3() { clickMenu14(); redAno3(); var secaoID = "tipos_generos_textuais_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function interpretacao_analise_textual_v3() { clickMenu14(); redAno3(); var secaoID = "interpretacao_analise_textual_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function estrategias_argumentativas_v3() { clickMenu14(); redAno3(); var secaoID = "estrategias_argumentativas_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }



///Educação SOCIOLOGIA  

function movimentos_sociais() { clickMenu15(); socAno1(); var secaoID = "movimentos_sociais_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function sociedade_contemporanea_v1() { clickMenu15(); socAno1(); var secaoID = "sociedade_contemporanea_v1"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 2
function trabalho_sociedade_v2() { clickMenu15(); socAno2(); var secaoID = "trabalho_sociedade_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function teoria_politica_sociedade_v2() { clickMenu15(); socAno2(); var secaoID = "teoria_politica_sociedade_v2"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
/// Volume 3 
function sociedade_cultura_popular_v3() { clickMenu15(); socAno3(); var secaoID = "sociedade_cultura_popular_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }
function povo_brasileiro_v3() { clickMenu15(); socAno3(); var secaoID = "povo_brasileiro_v3"; var elementoSecao = document.getElementById(secaoID); if (elementoSecao) { var posicaoSecao = elementoSecao.getBoundingClientRect().top; window.scrollTo({ top: window.scrollY + posicaoSecao - 80, behavior: "smooth" }); } else { console.error("ID da seção não encontrado: " + secaoID); } }






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

 
