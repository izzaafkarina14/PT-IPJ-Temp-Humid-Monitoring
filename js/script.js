// For mobile view
if (window.innerWidth <= 768) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.querySelector('.section-header').addEventListener('click', () => {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
    // Activate the first section by default
    sections[0].classList.add('active');
}