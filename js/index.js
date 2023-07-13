const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
    const btnvolume1 = document.getElementById('volume1');
        function toggleMenu(){
            const nav2 = document.getElementById('nav2');
            nav2.classList.toggle('active2'); 
        }
        btnvolume1.addEventListener('click', toggleMenu);
}   

btnMobile.addEventListener('click', toggleMenu);

