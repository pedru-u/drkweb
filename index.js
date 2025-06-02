document.addEventListener('DOMContentLoaded', function () {
    const navmenuButton = document.getElementById('navmenu-button');
    const navmenuButton2 = document.getElementById('navmenu-button2');
    const navmenuLinks = document.getElementById('link-list');
    const navmenuButtons = [navmenuButton, navmenuButton2];
    const navmenu = document.getElementById('phone-menu');
    navmenuButtons.forEach(function (button){
        button.addEventListener('click', function (){
            console.log('navmenu-button clicked');
            if (navmenu.classList.contains('animate-entry')){
                navmenuLinks.classList.add('animate-fade-out');
                navmenuLinks.classList.remove('animate-fade-in');
                navmenuButton2.classList.remove('animate-fade-in');
                navmenuButton2.classList.add('animate-fade-out');
                navmenu.classList.remove('animate-entry');
                navmenu.classList.add('animate-exit');
            }else{
                navmenuButton2.classList.remove('hidden');
                navmenuLinks.classList.add('animate-fade-in');
                navmenuLinks.classList.remove('animate-fade-out');
                navmenuButton2.classList.add('animate-fade-in');
                navmenuButton2.classList.remove('animate-fade-out');
                navmenu.classList.remove('animate-exit');
                navmenu.classList.add('animate-entry');
            }
        
    });
    });
    navmenuButton2.addEventListener('animationend', function (e) {
        if (e.animationName === 'fade-out') {
            navmenuButton2.classList.add('hidden');
        }
    });
    navmenuLinks.forEach(function (link){
        link.addEventListener('click',function (){
            console.log('link clicked');
            navmenuLinks.classList.add('animate-fade-out');
                navmenuLinks.classList.remove('animate-fade-in');
                navmenuButton2.classList.remove('animate-fade-in');
                navmenuButton2.classList.add('animate-fade-out');
                navmenu.classList.remove('animate-entry');
                navmenu.classList.add('animate-exit');
        })
    });

});