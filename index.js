document.addEventListener('DOMContentLoaded', function () {
    const navmenuButton = document.getElementById('navmenu-button');
    const navmenuButton2 = document.getElementById('navmenu-button2');
    const navmenuLinks = document.getElementById('link-list');
    const navmenuButtons = [navmenuButton, navmenuButton2];
    const navmenu = document.getElementById('phone-menu');
    navmenuButtons.forEach(function (button){
        button.addEventListener('click', function (){
            console.log('navmenu-button clicked');
            navmenuLinks.classList.toggle('animate-appear');
            if (navmenu.classList.contains('animate-entry')){
                navmenuLinks.classList.add('animate-fade-out');
                navmenuLinks.classList.remove('animate-fade-in');
                navmenu.classList.remove('animate-entry');
                navmenu.classList.add('animate-exit');
            }else{
                navmenuLinks.classList.add('animate-fade-in');
                navmenuLinks.classList.remove('animate-fade-out');
                navmenu.classList.remove('animate-exit');
                navmenu.classList.add('animate-entry');
            }
        navmenuButton2.classList.toggle('hidden');
    });
    });
});