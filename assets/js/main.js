"use strict";

/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function myMenuFunction() {
    const navMenu = document.getElementById("myNavMenu");

    if (!navMenu) return;

    navMenu.classList.toggle("responsive");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const navMenu = document.getElementById("myNavMenu");

        if (navMenu) {
            navMenu.classList.remove("responsive");
        }
    });
});


/* =====================================================
   NAVIGATION SHADOW
===================================================== */

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (!navHeader) return;

    if (window.scrollY > 50) {
        navHeader.classList.add("scrolled");
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    } else {
        navHeader.classList.remove("scrolled");
        navHeader.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", headerShadow);


/* =====================================================
   TYPING EFFECTS
===================================================== */

function initializeTypingEffects() {
    if (typeof Typed === "undefined") return;

    const typedGreeting = document.querySelector(".typedGreeting");
    const typedRole = document.querySelector(".typedRole");
    const typedText = document.querySelector(".typedText");

    /*
       Use this when your HTML contains:

       <span class="typedGreeting"></span>
    */

    if (typedGreeting) {
        new Typed(".typedGreeting", {
            strings: [
                "Hi, I’m Makendra.",
                "Welcome to my portfolio."
            ],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 1800,
            startDelay: 300,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }

    /*
       Use this when your HTML contains:

       <span class="typedRole"></span>
    */

    if (typedRole) {
        new Typed(".typedRole", {
            strings: [
                "Data Scientist",
                "Cybersecurity Professional"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }

    /*
       This keeps your original typedText class working
       until you update the HTML.
    */

    if (typedText && !typedGreeting) {
        new Typed(".typedText", {
            strings: [
                "I’m Makendra.",
                "welcome to my portfolio.",
                "take a look around."
            ],
            typeSpeed: 65,
            backSpeed: 35,
            backDelay: 1800,
            startDelay: 300,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }
}


/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */

function initializeScrollReveal() {
    if (typeof ScrollReveal === "undefined") return;

    const scrollReveal = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 1200,
        delay: 100,
        reset: false
    });

    scrollReveal.reveal(".featured-text-card");
    scrollReveal.reveal(".featured-name", {
        delay: 150
    });

    scrollReveal.reveal(".featured-role", {
        delay: 200
    });

    scrollReveal.reveal(".featured-text-info", {
        delay: 250
    });

    scrollReveal.reveal(".featured-text-btn", {
        delay: 300
    });

    scrollReveal.reveal(".social_icons", {
        delay: 350
    });

    scrollReveal.reveal(".featured-image", {
        delay: 300,
        origin: "right"
    });

    scrollReveal.reveal(".top-header");
    scrollReveal.reveal(".about-image", {
        delay: 150,
        origin: "left"
    });

    scrollReveal.reveal(".about-content", {
        delay: 200,
        origin: "right"
    });

    scrollReveal.reveal(".about-highlights", {
        delay: 250
    });

    scrollReveal.reveal(".fun-fact-card", {
        delay: 250
    });

    scrollReveal.reveal(".visual-break", {
        delay: 200
    });

    scrollReveal.reveal(".experience-item", {
        interval: 150
    });

    scrollReveal.reveal(".education-card", {
        interval: 150
    });

    scrollReveal.reveal(".project-card", {
        interval: 150
    });

    scrollReveal.reveal(".skills-card", {
        interval: 150
    });

    scrollReveal.reveal(".contact-card", {
        interval: 150
    });

    scrollReveal.reveal(".gif-container", {
        delay: 200
    });
}


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 140;
        const sectionId = section.getAttribute("id");

        const currentLink = document.querySelector(
            `.nav-menu a[href="#${sectionId}"]`
        );

        if (!currentLink) return;

        const sectionBottom = sectionTop + sectionHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            navLinks.forEach((link) => {
                link.classList.remove("active-link");
            });

            currentLink.classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);


/* =====================================================
   PARTICLES CONFIGURATION
===================================================== */

function initializeParticles() {
    const particlesContainer = document.getElementById("particles-js");

    if (!particlesContainer || typeof particlesJS === "undefined") {
        return;
    }

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 800
                }
            },

            color: {
                value: "#c850c0"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.45,
                random: false
            },

            size: {
                value: 4,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#d291bc",
                opacity: 0.35,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },

        interactivity: {
            detect_on: "canvas",

            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true
            },

            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },

                push: {
                    particles_nb: 3
                }
            }
        },

        retina_detect: true
    });
}


/* =====================================================
   PROJECT FILTERING
===================================================== */

function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((filterButton) => {
                filterButton.classList.remove("active");
            });

            button.classList.add("active");

            const selectedFilter = button.dataset.filter;

            projectCards.forEach((card) => {
                const projectCategory = card.dataset.category;

                const shouldShow =
                    selectedFilter === "all" ||
                    projectCategory === selectedFilter;

                card.classList.toggle("project-hidden", !shouldShow);

                if (shouldShow) {
                    card.setAttribute("aria-hidden", "false");
                } else {
                    card.setAttribute("aria-hidden", "true");
                }
            });
        });
    });
}


/* =====================================================
   EXPERIENCE ACCORDION
===================================================== */

function initializeExperienceAccordion() {
    const experienceItems = document.querySelectorAll(".experience-item");

    experienceItems.forEach((item) => {
        const title = item.querySelector(".exp-title");
        const button = item.querySelector(".toggle-btn");
        const details = item.querySelector(".exp-details");

        if (!details) return;

        details.style.display = "none";

        const clickableElement = button || title;

        if (!clickableElement) return;

        clickableElement.setAttribute("aria-expanded", "false");

        function toggleExperience() {
            const isOpen = item.classList.toggle("open");

            clickableElement.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            if (title && title !== clickableElement) {
                title.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            }

            details.style.display = isOpen ? "block" : "none";

            if (button) {
                const icon = button.querySelector("i");

                if (icon) {
                    icon.className = isOpen
                        ? "uil uil-angle-up"
                        : "uil uil-angle-down";
                } else {
                    button.textContent = isOpen ? "−" : "+";
                }
            }
        }

        clickableElement.addEventListener(
            "click",
            toggleExperience
        );

        if (title && title !== clickableElement) {
            title.setAttribute("tabindex", "0");
            title.setAttribute("role", "button");
            title.setAttribute("aria-expanded", "false");

            title.addEventListener("click", toggleExperience);

            title.addEventListener("keydown", (event) => {
                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();
                    toggleExperience();
                }
            });
        }

        clickableElement.addEventListener(
            "keydown",
            (event) => {
                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();
                    toggleExperience();
                }
            }
        );
    });
}

const experiences = [
    {
        title: "Scientist",
        organization: "NSWC Corona Division",
        category: "work",
        date: "2026 – Present",
        description:
            "Supporting technical work related to data science, cybersecurity, artificial intelligence, testing, and evaluation for Navy systems.",
        skills: ["Data Science", "Cybersecurity", "AI", "Testing"]
    },
    {
        title: "Graduate Assistant",
        organization: "Old Dominion University",
        category: "work",
        date: "August 2025 – May 2026",
        description:
            "Supported Living-Learning Communities, supervised peer mentors, organized programs, and helped students connect with campus resources.",
        skills: ["Program Support", "Mentoring", "Communication"]
    },
    {
        title: "SMART Scholar Intern",
        organization: "NSWCDD Dahlgren Division",
        category: "work",
        date: "May 2025 – July 2025",
        description:
            "Created testing procedures, updated system requirement documents, and developed technical guidance for internal teams.",
        skills: ["Testing", "Documentation", "Systems Engineering"]
    },
    {
        title: "Data Science Student Ambassador",
        organization: "Old Dominion University",
        category: "leadership",
        date: "2025 – 2026",
        description:
            "Represented the School of Data Science and helped promote its academic programs, events, and student opportunities.",
        skills: ["Public Speaking", "Outreach", "Leadership"]
    },
    {
        title: "Corresponding Secretary",
        organization: "Alpha Kappa Alpha Sorority, Incorporated",
        category: "leadership",
        date: "2023 – 2024",
        description:
            "Managed chapter communication, correspondence, meeting information, and organizational records.",
        skills: ["Communication", "Organization", "Administration"]
    },
    {
        title: "Community Outreach Director",
        organization: "Phi Sigma Rho",
        category: "leadership",
        date: "2026",
        description:
            "Coordinated service opportunities and community-focused programs for members of the organization.",
        skills: ["Community Outreach", "Planning", "Teamwork"]
    },
    {
        title: "Co-Recruitment Chair",
        organization: "Phi Sigma Rho",
        category: "leadership",
        date: "2026",
        description:
            "Helped plan recruitment activities and create an engaging experience for prospective members.",
        skills: ["Recruitment", "Event Planning", "Collaboration"]
    },
    {
        title: "Volunteer",
        organization: "Monarch Clothing Closet",
        category: "volunteer",
        date: "April 2025 – Present",
        description:
            "Help students access professional and everyday clothing through organization, inventory support, and direct assistance.",
        skills: ["Service", "Organization", "Student Support"]
    },
    {
        title: "Volunteer",
        organization: "Monarch Pantry",
        category: "volunteer",
        date: "October 2023 – Present",
        description:
            "Assist with organizing food and supplies that support students experiencing food insecurity.",
        skills: ["Community Service", "Inventory", "Teamwork"]
    },
    {
        title: "Cybersecurity Mentor",
        organization: "CTEWorkforce",
        category: "volunteer",
        date: "November 2023 – January 2024",
        description:
            "Provided guidance and encouragement to students interested in cybersecurity education and career paths.",
        skills: ["Cybersecurity", "Mentoring", "Career Guidance"]
    },
    {
        title: "Summer Student Counselor",
        organization: "Old Dominion University",
        category: "volunteer",
        date: "August 2023",
        description:
            "Helped incoming students navigate campus resources and adjust to the university environment.",
        skills: ["Student Support", "Communication", "Campus Engagement"]
    }
];

const experienceGrid = document.getElementById("experienceGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const pageNumbers = document.getElementById("pageNumbers");
const previousPageButton = document.getElementById("previousPage");
const nextPageButton = document.getElementById("nextPage");
const pageStatus = document.getElementById("pageStatus");

const itemsPerPage = 6;

let activeFilter = "all";
let currentPage = 1;

function getFilteredExperiences() {
    if (activeFilter === "all") {
        return experiences;
    }

    return experiences.filter(
        (experience) => experience.category === activeFilter
    );
}

function createExperienceCard(experience) {
    const card = document.createElement("article");
    card.classList.add("experience-card");

    const skillsHTML = experience.skills
        .map(
            (skill) =>
                `<span class="experience-skill">${escapeHTML(skill)}</span>`
        )
        .join("");

    card.innerHTML = `
        <div class="experience-card-header">
            <div>
                <h3>${escapeHTML(experience.title)}</h3>
                <p class="experience-company">
                    ${escapeHTML(experience.organization)}
                </p>
            </div>

            <span class="experience-type">
                ${escapeHTML(experience.category)}
            </span>
        </div>

        <p class="experience-date">${escapeHTML(experience.date)}</p>

        <p class="experience-description">
            ${escapeHTML(experience.description)}
        </p>

        <div class="experience-skills">
            ${skillsHTML}
        </div>
    `;

    return card;
}

function renderExperiences() {
    const filteredExperiences = getFilteredExperiences();
    const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);

    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentExperiences = filteredExperiences.slice(startIndex, endIndex);

    experienceGrid.innerHTML = "";

    if (currentExperiences.length === 0) {
        experienceGrid.innerHTML = `
            <p class="no-results">No experience found in this category.</p>
        `;
    } else {
        currentExperiences.forEach((experience) => {
            experienceGrid.appendChild(createExperienceCard(experience));
        });
    }

    renderPagination(totalPages, filteredExperiences.length);
}

function renderPagination(totalPages, totalItems) {
    pageNumbers.innerHTML = "";

    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement("button");

        pageButton.type = "button";
        pageButton.textContent = page;
        pageButton.classList.add("page-btn");
        pageButton.setAttribute("aria-label", `Go to page ${page}`);

        if (page === currentPage) {
            pageButton.classList.add("active");
            pageButton.setAttribute("aria-current", "page");
        }

        pageButton.addEventListener("click", () => {
            currentPage = page;
            renderExperiences();
            scrollToExperienceTop();
        });

        pageNumbers.appendChild(pageButton);
    }

    previousPageButton.disabled = currentPage === 1;
    nextPageButton.disabled =
        currentPage === totalPages || totalPages === 0;

    if (totalPages <= 1) {
        document.getElementById("pagination").style.display = "none";
    } else {
        document.getElementById("pagination").style.display = "flex";
    }

    pageStatus.textContent =
        totalItems > 0
            ? `Page ${currentPage} of ${totalPages} • ${totalItems} experience ${
                  totalItems === 1 ? "entry" : "entries"
              }`
            : "";
}

function scrollToExperienceTop() {
    document.getElementById("experience").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");
        activeFilter = button.dataset.filter;
        currentPage = 1;

        renderExperiences();
    });
});

previousPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderExperiences();
        scrollToExperienceTop();
    }
});

nextPageButton.addEventListener("click", () => {
    const filteredExperiences = getFilteredExperiences();
    const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderExperiences();
        scrollToExperienceTop();
    }
});

renderExperiences();

const itemsPerPage = 6;

/* =====================================================
   PROJECT MODAL
===================================================== */

function initializeProjectModal() {
    const modal = document.getElementById("project-modal");
    const closeButton = document.querySelector(
        "#project-modal .close"
    );

    const projectBoxes = document.querySelectorAll(
        "[data-title][data-description]"
    );

    if (!modal || !projectBoxes.length) return;

    const modalTitle = document.getElementById("modal-title");
    const modalDescription =
        document.getElementById("modal-description");

    const modalLink = document.getElementById("modal-link");
    const modalImage = document.getElementById("modal-image");

    function openModal(projectBox) {
        const title = projectBox.dataset.title || "Project";
        const description =
            projectBox.dataset.description ||
            "Project details coming soon.";

        const link = projectBox.dataset.link || "#";
        const image = projectBox.dataset.image || "";

        if (modalTitle) {
            modalTitle.textContent = title;
        }

        if (modalDescription) {
            modalDescription.textContent = description;
        }

        if (modalLink) {
            modalLink.href = link;

            if (link === "#") {
                modalLink.style.display = "none";
            } else {
                modalLink.style.display = "inline-flex";
            }
        }

        if (modalImage) {
            if (image) {
                modalImage.src = image;
                modalImage.alt = `${title} project preview`;
                modalImage.style.display = "block";
            } else {
                modalImage.style.display = "none";
            }
        }

        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");
    }

    projectBoxes.forEach((projectBox) => {
        projectBox.addEventListener("click", () => {
            openModal(projectBox);
        });
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            modal.style.display !== "none"
        ) {
            closeModal();
        }
    });
}


/* =====================================================
   SMOOTH SCROLLING
===================================================== */

function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetSection =
                document.querySelector(targetId);

            if (!targetSection) return;

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}


/* =====================================================
   RESUME BUTTONS
===================================================== */

function initializeResumeButtons() {
    const resumeButtons = document.querySelectorAll(
        ".resume-button, .download-btn"
    );

    resumeButtons.forEach((button) => {
        button.setAttribute(
            "href",
            "assets/resume/MakendraCrosby_Resume_3.docx"
        );

        button.setAttribute("download", "");
    });
}


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

function initializeBackToTopButton() {
    const backToTopButton =
        document.getElementById("back-to-top");

    if (!backToTopButton) return;

    function toggleBackToTopButton() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    }

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener(
        "scroll",
        toggleBackToTopButton
    );

    toggleBackToTopButton();
}


/* =====================================================
   CURRENT YEAR
===================================================== */

function updateCurrentYear() {
    const yearElements =
        document.querySelectorAll(".current-year");

    const currentYear = new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });
}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    headerShadow();
    scrollActive();

    initializeTypingEffects();
    initializeScrollReveal();
    initializeParticles();
    initializeProjectFilters();
    initializeExperienceAccordion();
    initializeProjectModal();
    initializeSmoothScrolling();
    initializeResumeButtons();
    initializeBackToTopButton();
    updateCurrentYear();
});
