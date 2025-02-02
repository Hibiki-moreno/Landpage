function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

document.getElementById('menuToggle').addEventListener('click', toggleMenu);

gsap.to("#title", { opacity: 1, y: -10, duration: 1 });
gsap.to("#description", { opacity: 1, y: -10, duration: 1, delay: 0.5 });
gsap.to("#buttonContainer", { opacity: 1, scale: 1, duration: 0.8, delay: 1 });

gsap.to("h1, p", { 
    opacity: 1, 
    y: -10, 
    duration: 1, 
    stagger: 0.3 
});