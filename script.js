const aboutBtns = document.querySelectorAll('.about-btn');
const aboutContent = document.getElementById('about-content');

const aboutData = {
    experience: `<h3>Experience</h3><ul><li>Software Engineer at XYZ Corp (2026-2027)</li><li>Intern at ABC Tech (2025-2026)</li></ul>`,
    education: `<h3>Education</h3><ul><li>BSc in Computer Engineering, Istanbul Aydin University (2022-2027)</li></ul>`,
    skills: `<h3>Skills</h3><ul><li>JavaScript, HTML, CSS</li><li>Python, C, Java</li><li>MySQL, Bootstrap</li></ul>`
};

aboutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        aboutBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        aboutContent.innerHTML = aboutData[btn.dataset.tab];
    });
});

if (aboutBtns.length) {
    aboutBtns[0].click();
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting me!');
        contactForm.reset();
    });
}

const projectsList = document.getElementById('projects-list');
if (projectsList) {
    projectsList.innerHTML = `
        <div class="project-item">
            <h3>Portfolio Website</h3>
            <p>A portfolio website is created to showcase a person's skills, projects, and experience in a professional and organized way. It serves as an online resume that helps potential employers, clients, or collaborators learn more about your work and capabilities. By presenting your best work, a portfolio website can increase your chances of getting job offers, freelance opportunities, or internships.</p>
        </div>
    `;
}

const navbarLeft = document.querySelector('.navbar-left');
if (navbarLeft) {
    navbarLeft.style.cursor = 'pointer';
    navbarLeft.addEventListener('click', () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
} 