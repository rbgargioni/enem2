//const btnMobile = document.getElementById('btn-mobile');
//function toggleMenu(){
//    const nav = document.getElementById('nav');
//    nav.classList.toggle('active');
//}
//btnMobile.addEventListener('click', toggleMenu);

function clickMenu(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
        menu2.style.display = 'none'
        menu3.style.display = 'none'
    }
    else{
        menu.style.display = 'block'
    }
}
 
function clickMenu2(){
    if (menu2.style.display == 'block'){
        menu.style.display = 'none'
        menu2.style.display = 'none'
        menu3.style.display = 'none'
    }
    else{
        menu2.style.display = 'block'
    }
}

function clickMenu3(){
    if (menu3.style.display == 'block'){
        menu3.style.display = 'none'
        menu.style.display = 'none'
        menu2.style.display = 'none'
    }
    else{
        menu3.style.display = 'block'
    }
}
 
