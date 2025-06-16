document.addEventListener('DOMContentLoaded', function () {
    const navmenuButton = document.getElementById('navmenu-button');
    const navmenuButton2 = document.getElementById('navmenu-button2');
    const navmenuButtons = [navmenuButton, navmenuButton2];
    const navmenuLinks = document.getElementById('link-list');
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
    // Fix: Attach click event to each link inside navmenuLinks for smooth scroll and menu close
    const navLinks = navmenuLinks.querySelectorAll('a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            // Close menu animations
            navmenuLinks.classList.add('animate-fade-out');
            navmenuLinks.classList.remove('animate-fade-in');
            navmenuButton2.classList.remove('animate-fade-in');
            navmenuButton2.classList.add('animate-fade-out');
            navmenu.classList.remove('animate-entry');
            navmenu.classList.add('animate-exit');
            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    cards = document.querySelectorAll('.card');
    cardContainer = document.querySelector('.card-container');
    const cardWidth = cards[0].offsetWidth;
    let currentIndex = 0; // Initialize the index for the main cards

    function scrollToNextCard() {
        currentIndex = (currentIndex + 1) % cards.length; // Increment the index and loop back to the first card if necessary

    // Scroll to the next card
        cardContainer.scrollTo({
            left: currentIndex * cardWidth, // Calculate the position of the next card
            behavior: 'smooth', // Enable smooth scrolling
        });

    }
    dotsInterval = setInterval(scrollToNextCard, 6000); // Change the interval as needed (5000ms = 5 seconds)

    const dotList = document.getElementById('dot-list')
    const dots = dotList.querySelectorAll('li');
    console.log(dots);
    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            console.log('dot clicked');
            clearInterval(dotsInterval); // Clear the interval to stop automatic scrolling when a dot is clicked
            currentIndex = index; // Set the current index to the clicked dot's index // Get the width of a single card
            cardContainer.scrollTo({
                left: currentIndex * cardWidth, // Scroll to the position of the clicked dot
                behavior: 'smooth', // Enable smooth scrolling
            });
        });
    })
    cardContainer.addEventListener('scroll', () => {
    const containerScrollLeft = cardContainer.scrollLeft;

    currentIndex = Math.round(containerScrollLeft / cardWidth);

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active'); // Highlight the dot corresponding to the visible card
            currentIndex = index
        } else {
            dot.classList.remove('active'); // Remove the highlight from other dots
        }
    });
    });
});