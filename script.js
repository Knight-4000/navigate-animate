const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Nav Links Animation

function navAnimation(waxon, waxoff) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${waxon}-${i + 1 }`, `slide-${waxoff}-${i + 1}`);
    })
}

function toggleNav() {
    // Toggle for menu bars
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event Listeners 

menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
