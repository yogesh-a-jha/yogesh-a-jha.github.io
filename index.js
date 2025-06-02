document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeMobileMenuButton = document.getElementById('closeMobileMenuButton');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileNavLinks = mobileNavMenu.querySelectorAll('a');

    mobileMenuButton.addEventListener('click', () => {
        mobileNavMenu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileNavMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });


    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.section, .skill-badge, .project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Dynamic content for Skills
    const skills = [
        "HTML","CSS",
        "JavaScript", "React JS", "Node.js", "Python", "SQL & NoSQL",
        "RESTful APIs","mongo DB","c", "c++",
         "Problem Solving"
    ];
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach((skill, index) => {
        const skillBadge = document.createElement('div');
        skillBadge.classList.add('skill-badge');
        skillBadge.style.transitionDelay = `${index * 100}ms`;
        skillBadge.innerHTML = `
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>${skill}</span>
        `; // Using a checkmark as a generic skill icon
        skillsGrid.appendChild(skillBadge);
        observer.observe(skillBadge); // Observe dynamically added skill badges
    });

    // Dynamic content for Projects
    // const projects = [
    //     {
    //         title: "AI Powered Code Analyzer",
    //         description: "A web application that uses machine learning to analyze code snippets for complexity and potential bugs, providing actionable insights.",
    //         techStack: ["Python", "Flask", "React", "TensorFlow", "Docker"],
    //         githubLink: "#",
    //         liveLink: "#",
    //         imagePlaceholderColor: "bg-sky-700", // Tailwind class, translate to style
    //         bgColorStyle: "background-color: #0369a1;" // sky-700
    //     },
    //     {
    //         title: "Decentralized Social Network",
    //         description: "A proof-of-concept social media platform built on blockchain technology, ensuring user data privacy and censorship resistance.",
    //         techStack: ["Solidity", "Next.js", "IPFS", "Hardhat", "Ethers.js"],
    //         githubLink: "#",
    //         liveLink: "#",
    //         imagePlaceholderColor: "bg-indigo-700",
    //         bgColorStyle: "background-color: #4338ca;" // indigo-700
    //     },
    //     {
    //         title: "Real-time IoT Dashboard",
    //         description: "A dashboard for visualizing and managing data from IoT devices in real-time, featuring customizable widgets and alerts.",
    //         techStack: ["Node.js", "Vue.js", "MQTT", "MongoDB", "Chart.js"],
    //         githubLink: "#",
    //         liveLink: "#",
    //         imagePlaceholderColor: "bg-emerald-700",
    //         bgColorStyle: "background-color: #047857;" // emerald-700
    //     },
    // ];
    // const projectsGrid = document.querySelector('.projects-grid');
    // projects.forEach((project, index) => {
    //     const projectCard = document.createElement('div');
    //     projectCard.classList.add('project-card');
    //     projectCard.style.transitionDelay = `${index * 100}ms`;
    //     projectCard.innerHTML = `
    //         <div class="project-image-placeholder" style="${project.bgColorStyle}">
    //             ${project.title.split(' ').map(word => word[0]).join('')}
    //         </div>
    //         <div class="project-content">
    //             <h3 class="project-title">${project.title}</h3>
    //             <p class="project-description">${project.description}</p>
    //             <div class="project-tech-label">Technologies:</div>
    //             <div class="project-tech-stack">
    //                 ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
    //             </div>
    //             <div class="project-links">
    //                 ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" aria-label="${project.title} GitHub repository">
    //                     <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    //                 </a>` : ''}
    //                 ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" aria-label="${project.title} live demo">
    //                     <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    //                 </a>` : ''}
    //             </div>
    //         </div>
    //     `;
    //     projectsGrid.appendChild(projectCard);
    //     observer.observe(projectCard); // Observe dynamically added project cards
    // });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const submitButtonText = document.getElementById('submitButtonText');
    const sendIcon = document.getElementById('sendIcon');
    const spinnerIcon = document.getElementById('spinnerIcon');
    const formStatusMessage = document.getElementById('formStatusMessage');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitButton.disabled = true;
        submitButtonText.textContent = 'Sending...';
        sendIcon.style.display = 'none';
        spinnerIcon.style.display = 'inline-block';
        formStatusMessage.style.display = 'none';

        // Simulate API Call
        await new Promise(resolve => setTimeout(resolve, 1500));

        const success = Math.random() > 0.2; // 80% chance of success

        if (success) {
            formStatusMessage.textContent = "Message sent successfully! I'll get back to you soon.";
            formStatusMessage.className = 'form-status-message success';
            contactForm.reset();
        } else {
            formStatusMessage.textContent = 'Something went wrong. Please try again later.';
            formStatusMessage.className = 'form-status-message error';
        }
        
        formStatusMessage.style.display = 'block';
        submitButton.disabled = false;
        submitButtonText.textContent = 'Send Message';
        sendIcon.style.display = 'inline-block';
        spinnerIcon.style.display = 'none';
    });

    // Footer: Current Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});