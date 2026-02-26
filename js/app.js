// scroll to contact section when hero button is clicked
const startBtn = document.getElementById('start-btn');
if (startBtn) {
    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
