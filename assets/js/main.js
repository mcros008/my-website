"use strict";

/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function myMenuFunction() {
    const navMenu = document.getElementById("myNavMenu");

    if (!navMenu) return;

    navMenu.classList.toggle("responsive");
}

/* =====================================================
   NAVIGATION SHADOW
===================================================== */

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (!navHeader) return;

    const isScrolled = window.scrollY > 50;

    navHeader.classList.toggle("scrolled", isScrolled);

    navHeader.style.boxShadow = isScrolled
        ? "0 1px 6px rgba(0, 0, 0, 0.1)"
        : "none";
}

/* =====================================================
   TYPING EFFECTS
===================================================== */

function initializeTypingEffects() {
    if (typeof Typed === "undefined") return;

    const typedGreeting =
        document.querySelector(".typedGreeting");

    const typedRole =
        document.querySelector(".typedRole");

    const typedText =
        document.querySelector(".typedText");

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

    scrollReveal.reveal(".animation-container", {
        delay: 200
    });
}

/* =====================================================
   ACTIVE NAVIGATION LINKS
===================================================== */

function initializeNavigation() {
    const navLinks =
        document.querySelectorAll(".nav-link");

    const sections =
        document.querySelectorAll("section[id]");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const navMenu =
                document.getElementById("myNavMenu");

            if (navMenu) {
                navMenu.classList.remove("responsive");
            }
        });
    });

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop =
                section.offsetTop - 140;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            const sectionId =
                section.getAttribute("id");

            const currentLink =
                document.querySelector(
                    `.nav-menu a[href="#${sectionId}"]`
                );

            if (!currentLink) return;

            if (
                scrollY >= sectionTop &&
                scrollY < sectionBottom
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove(
                        "active-link"
                    );
                });

                currentLink.classList.add(
                    "active-link"
                );
            }
        });
    }

    window.addEventListener(
        "scroll",
        scrollActive,
        {
            passive: true
        }
    );

    scrollActive();
}

/* =====================================================
   PARTICLES CONFIGURATION
===================================================== */

function initializeParticles() {
    const particlesContainer =
        document.getElementById("particles-js");

    if (
        !particlesContainer ||
        typeof particlesJS === "undefined"
    ) {
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
    const projectsSection =
        document.getElementById("projects");

    if (!projectsSection) return;

    const filterButtons =
        projectsSection.querySelectorAll(
            ".project-filters .filter-btn"
        );

    const projectCards =
        projectsSection.querySelectorAll(
            ".project-card"
        );

    if (
        !filterButtons.length ||
        !projectCards.length
    ) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter =
                button.dataset.filter || "all";

            filterButtons.forEach(
                (filterButton) => {
                    filterButton.classList.remove(
                        "active"
                    );

                    filterButton.setAttribute(
                        "aria-pressed",
                        "false"
                    );
                }
            );

            button.classList.add("active");

            button.setAttribute(
                "aria-pressed",
                "true"
            );

            projectCards.forEach((card) => {
                const projectCategory =
                    card.dataset.category || "";

                const categories =
                    projectCategory.split(/\s+/);

                const shouldShow =
                    selectedFilter === "all" ||
                    categories.includes(
                        selectedFilter
                    );

                card.classList.toggle(
                    "project-hidden",
                    !shouldShow
                );

                card.setAttribute(
                    "aria-hidden",
                    String(!shouldShow)
                );
            });
        });
    });
}

/* =====================================================
   EXPERIENCE DATA
===================================================== */

const experiences = [
    {
        title: "Scientist",
        organization:
            "NSWC Corona Division",
        category: "work",
        date: "2026 – Present",
        description:
            "Supporting technical work related to data science, cybersecurity, artificial intelligence, testing, and evaluation for Navy systems.",
        skills: [
            "Data Science",
            "Cybersecurity",
            "AI",
            "Testing"
        ]
    },
    {
        title: "Graduate Assistant",
        organization:
            "Old Dominion University",
        category: "work",
        date:
            "August 2025 – May 2026",
        description:
            "Supported Living-Learning Communities, supervised peer mentors, organized programs, and helped students connect with campus resources.",
        skills: [
            "Program Support",
            "Mentoring",
            "Communication"
        ]
    },
    {
        title: "SMART Scholar Intern",
        organization:
            "NSWCDD Dahlgren Division",
        category: "work",
        date: "May 2025 – July 2025",
        description:
            "Created testing procedures, updated system requirement documents, and developed technical guidance for internal teams.",
        skills: [
            "Testing",
            "Documentation",
            "Systems Engineering"
        ]
    },
    {
        title:
            "Data Science Student Ambassador",
        organization:
            "Old Dominion University",
        category: "leadership",
        date: "2025 – 2026",
        description:
            "Represented the School of Data Science and helped promote its academic programs, events, and student opportunities.",
        skills: [
            "Public Speaking",
            "Outreach",
            "Leadership"
        ]
    },
    {
        title:
            "Corresponding Secretary",
        organization:
            "Alpha Kappa Alpha Sorority, Incorporated",
        category: "leadership",
        date: "2023 – 2024",
        description:
            "Managed chapter communication, correspondence, meeting information, and organizational records.",
        skills: [
            "Communication",
            "Organization",
            "Administration"
        ]
    },
    {
        title:
            "Community Outreach Director",
        organization:
            "Phi Sigma Rho",
        category: "leadership",
        date: "2026",
        description:
            "Coordinated service opportunities and community-focused programs for members of the organization.",
        skills: [
            "Community Outreach",
            "Planning",
            "Teamwork"
        ]
    },
    {
        title:
            "Co-Recruitment Chair",
        organization:
            "Phi Sigma Rho",
        category: "leadership",
        date: "2026",
        description:
            "Helped plan recruitment activities and create an engaging experience for prospective members.",
        skills: [
            "Recruitment",
            "Event Planning",
            "Collaboration"
        ]
    },
    {
        title: "Volunteer",
        organization:
            "Monarch Clothing Closet",
        category: "volunteer",
        date: "April 2025 – Present",
        description:
            "Help students access professional and everyday clothing through organization, inventory support, and direct assistance.",
        skills: [
            "Service",
            "Organization",
            "Student Support"
        ]
    },
    {
        title: "Volunteer",
        organization:
            "Monarch Pantry",
        category: "volunteer",
        date:
            "October 2023 – Present",
        description:
            "Assist with organizing food and supplies that support students experiencing food insecurity.",
        skills: [
            "Community Service",
            "Inventory",
            "Teamwork"
        ]
    },
    {
        title:
            "Cybersecurity Mentor",
        organization:
            "CTEWorkforce",
        category: "volunteer",
        date:
            "November 2023 – January 2024",
        description:
            "Provided guidance and encouragement to students interested in cybersecurity education and career paths.",
        skills: [
            "Cybersecurity",
            "Mentoring",
            "Career Guidance"
        ]
    },
    {
        title:
            "Summer Student Counselor",
        organization:
            "Old Dominion University",
        category: "volunteer",
        date: "August 2023",
        description:
            "Helped incoming students navigate campus resources and adjust to the university environment.",
        skills: [
            "Student Support",
            "Communication",
            "Campus Engagement"
        ]
    }
];

/* =====================================================
   HTML SAFETY HELPER
===================================================== */

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =====================================================
   EXPERIENCE FILTERING, PAGINATION, AND ACCORDION
===================================================== */

function initializeExperienceSection() {
    const experienceSection =
        document.getElementById("experience");

    const experienceContainer =
        document.getElementById(
            "experienceItems"
        );

    const pagination =
        document.getElementById(
            "experiencePagination"
        );

    const pageNumbers =
        document.getElementById(
            "experiencePageNumbers"
        );

    const previousPageButton =
        document.getElementById(
            "experiencePrevious"
        );

    const nextPageButton =
        document.getElementById(
            "experienceNext"
        );

    const pageStatus =
        document.getElementById(
            "experiencePageStatus"
        );

    if (
        !experienceSection ||
        !experienceContainer ||
        !pagination ||
        !pageNumbers ||
        !previousPageButton ||
        !nextPageButton ||
        !pageStatus
    ) {
        console.warn(
            "Experience section could not load because one or more required HTML elements are missing."
        );

        return;
    }

    const filterButtons =
        experienceSection.querySelectorAll(
            ".experience-filter-btn"
        );

    const itemsPerPage = 4;

    let activeFilter = "all";
    let currentPage = 1;

    function getFilteredExperiences() {
        if (activeFilter === "all") {
            return experiences;
        }

        return experiences.filter(
            (experience) =>
                experience.category ===
                activeFilter
        );
    }

    function createExperienceItem(
        experience,
        itemIndex
    ) {
        const item =
            document.createElement("article");

        item.className =
            "experience-item";

        item.dataset.category =
            experience.category;

        const detailsId =
            `experience-details-${itemIndex}`;

        const skillsList =
            experience.skills
                .map(
                    (skill) =>
                        `<li>${escapeHTML(
                            skill
                        )}</li>`
                )
                .join("");

        item.innerHTML = `
            <div class="experience-header">
                <div>
                    <h3 class="exp-title">
                        ${escapeHTML(
                            experience.title
                        )}
                    </h3>

                    <h4>
                        ${escapeHTML(
                            experience.organization
                        )}
                    </h4>
                </div>

                <span class="experience-date">
                    ${escapeHTML(
                        experience.date
                    )}
                </span>
            </div>

            <button
                type="button"
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="${detailsId}"
            >
                View Details

                <i
                    class="uil uil-angle-down"
                    aria-hidden="true"
                ></i>
            </button>

            <div
                class="exp-details"
                id="${detailsId}"
                hidden
            >
                <p>
                    ${escapeHTML(
                        experience.description
                    )}
                </p>

                <ul>
                    ${skillsList}
                </ul>
            </div>
        `;

        const toggleButton =
            item.querySelector(
                ".toggle-btn"
            );

        const details =
            item.querySelector(
                ".exp-details"
            );

        const icon =
            toggleButton?.querySelector("i");

        if (
            toggleButton &&
            details
        ) {
            toggleButton.addEventListener(
                "click",
                () => {
                    const isOpen =
                        item.classList.toggle(
                            "open"
                        );

                    toggleButton.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                    details.hidden = !isOpen;

                    if (icon) {
                        icon.className =
                            isOpen
                                ? "uil uil-angle-up"
                                : "uil uil-angle-down";
                    }

                    const textNode =
                        toggleButton.childNodes[0];

                    if (textNode) {
                        textNode.textContent =
                            isOpen
                                ? "Hide Details "
                                : "View Details ";
                    }
                }
            );
        }

        return item;
    }

    function scrollToExperienceSection() {
        experienceSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function renderPagination(
        totalPages,
        totalItems
    ) {
        pageNumbers.innerHTML = "";

        for (
            let page = 1;
            page <= totalPages;
            page += 1
        ) {
            const pageButton =
                document.createElement(
                    "button"
                );

            pageButton.type = "button";

            pageButton.textContent =
                page;

            pageButton.className =
                "experience-page-btn";

            pageButton.setAttribute(
                "aria-label",
                `Go to experience page ${page}`
            );

            if (page === currentPage) {
                pageButton.classList.add(
                    "active"
                );

                pageButton.setAttribute(
                    "aria-current",
                    "page"
                );
            }

            pageButton.addEventListener(
                "click",
                () => {
                    currentPage = page;

                    renderExperiences();

                    scrollToExperienceSection();
                }
            );

            pageNumbers.appendChild(
                pageButton
            );
        }

        previousPageButton.disabled =
            currentPage <= 1;

        nextPageButton.disabled =
            totalPages === 0 ||
            currentPage >= totalPages;

        pagination.style.display =
            totalPages > 1
                ? "flex"
                : "none";

        if (totalItems > 0) {
            const entryWord =
                totalItems === 1
                    ? "entry"
                    : "entries";

            pageStatus.textContent =
                `Page ${currentPage} of ${totalPages} • ` +
                `${totalItems} experience ${entryWord}`;
        } else {
            pageStatus.textContent = "";
        }
    }

    function renderExperiences() {
        const filteredExperiences =
            getFilteredExperiences();

        const totalItems =
            filteredExperiences.length;

        const totalPages =
            Math.ceil(
                totalItems /
                    itemsPerPage
            );

        if (totalPages === 0) {
            currentPage = 1;
        } else if (
            currentPage > totalPages
        ) {
            currentPage = totalPages;
        }

        const startIndex =
            (currentPage - 1) *
            itemsPerPage;

        const currentExperiences =
            filteredExperiences.slice(
                startIndex,
                startIndex +
                    itemsPerPage
            );

        experienceContainer.innerHTML =
            "";

        if (
            currentExperiences.length === 0
        ) {
            experienceContainer.innerHTML = `
                <p class="no-results">
                    No experience found in this category.
                </p>
            `;
        } else {
            currentExperiences.forEach(
                (
                    experience,
                    index
                ) => {
                    const item =
                        createExperienceItem(
                            experience,
                            startIndex +
                                index
                        );

                    experienceContainer.appendChild(
                        item
                    );
                }
            );
        }

        renderPagination(
            totalPages,
            totalItems
        );
    }

    filterButtons.forEach((button) => {
        button.addEventListener(
            "click",
            () => {
                const selectedFilter =
                    button.dataset.filter;

                if (!selectedFilter) {
                    return;
                }

                filterButtons.forEach(
                    (filterButton) => {
                        filterButton.classList.remove(
                            "active"
                        );

                        filterButton.setAttribute(
                            "aria-pressed",
                            "false"
                        );
                    }
                );

                button.classList.add(
                    "active"
                );

                button.setAttribute(
                    "aria-pressed",
                    "true"
                );

                activeFilter =
                    selectedFilter;

                currentPage = 1;

                renderExperiences();
            }
        );
    });

    previousPageButton.addEventListener(
        "click",
        () => {
            if (currentPage <= 1) {
                return;
            }

            currentPage -= 1;

            renderExperiences();

            scrollToExperienceSection();
        }
    );

    nextPageButton.addEventListener(
        "click",
        () => {
            const totalPages =
                Math.ceil(
                    getFilteredExperiences()
                        .length /
                        itemsPerPage
                );

            if (
                currentPage >= totalPages
            ) {
                return;
            }

            currentPage += 1;

            renderExperiences();

            scrollToExperienceSection();
        }
    );

    const allButton =
        Array.from(
            filterButtons
        ).find(
            (button) =>
                button.dataset.filter ===
                "all"
        );

    if (allButton) {
        allButton.classList.add(
            "active"
        );

        allButton.setAttribute(
            "aria-pressed",
            "true"
        );
    }

    renderExperiences();
}

/* =====================================================
   PROJECT MODAL
===================================================== */

function initializeProjectModal() {
    const modal =
        document.getElementById(
            "project-modal"
        );

    const closeButton =
        document.querySelector(
            "#project-modal .close"
        );

    const projectCards =
        document.querySelectorAll(
            ".project-card[data-title][data-description]"
        );

    if (
        !modal ||
        !projectCards.length
    ) {
        return;
    }

    const modalTitle =
        document.getElementById(
            "modal-title"
        );

    const modalDescription =
        document.getElementById(
            "modal-description"
        );

    const modalLink =
        document.getElementById(
            "modal-link"
        );

    const modalImage =
        document.getElementById(
            "modal-image"
        );

    let lastFocusedElement = null;

    function openModal(projectCard) {
        const title =
            projectCard.dataset.title ||
            "Project";

        const description =
            projectCard.dataset.description ||
            "Project details coming soon.";

        const link =
            projectCard.dataset.link ||
            "#";

        const image =
            projectCard.dataset.image ||
            "assets/images/projects/coming-soon.png";

        lastFocusedElement =
            document.activeElement;

        if (modalTitle) {
            modalTitle.textContent =
                title;
        }

        if (modalDescription) {
            modalDescription.textContent =
                description;
        }

        if (modalLink) {
            modalLink.href = link;

            modalLink.style.display =
                link === "#"
                    ? "none"
                    : "inline-flex";
        }

        if (modalImage) {
            modalImage.src = image;

            modalImage.alt =
                `${title} project preview`;

            modalImage.style.display =
                "block";

            modalImage.onerror = () => {
                modalImage.src =
                    "assets/images/projects/coming-soon.png";
            };
        }

        modal.style.display = "flex";

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

        if (closeButton) {
            closeButton.focus();
        }
    }

    function closeModal() {
        modal.style.display = "none";

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    projectCards.forEach(
        (projectCard) => {
            projectCard.setAttribute(
                "role",
                "button"
            );

            projectCard.setAttribute(
                "tabindex",
                "0"
            );

            projectCard.addEventListener(
                "click",
                (event) => {
                    if (
                        event.target.closest(
                            "a, button"
                        )
                    ) {
                        return;
                    }

                    openModal(
                        projectCard
                    );
                }
            );

            projectCard.addEventListener(
                "keydown",
                (event) => {
                    if (
                        event.key ===
                            "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();

                        openModal(
                            projectCard
                        );
                    }
                }
            );
        }
    );

    if (closeButton) {
        closeButton.addEventListener(
            "click",
            closeModal
        );
    }

    modal.addEventListener(
        "click",
        (event) => {
            if (event.target === modal) {
                closeModal();
            }
        }
    );

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape" &&
                modal.getAttribute(
                    "aria-hidden"
                ) === "false"
            ) {
                closeModal();
            }
        }
    );
}

/* =====================================================
   SMOOTH SCROLLING
===================================================== */

function initializeSmoothScrolling() {
    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    anchorLinks.forEach((link) => {
        link.addEventListener(
            "click",
            (event) => {
                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const targetSection =
                    document.querySelector(
                        targetId
                    );

                if (!targetSection) {
                    return;
                }

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
}

/* =====================================================
   RESUME BUTTONS
===================================================== */

function initializeResumeButtons() {
    const resumeButtons =
        document.querySelectorAll(
            ".resume-button, .download-btn"
        );

    resumeButtons.forEach((button) => {
        button.setAttribute(
            "href",
            "assets/resume/MakendraCrosby_Resume_3.docx"
        );

        button.setAttribute(
            "download",
            ""
        );
    });
}

/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

function initializeBackToTopButton() {
    const backToTopButton =
        document.getElementById(
            "back-to-top"
        );

    if (!backToTopButton) return;

    function toggleBackToTopButton() {
        const shouldShow =
            window.scrollY > 500;

        backToTopButton.classList.toggle(
            "show",
            shouldShow
        );
    }

    backToTopButton.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );

    window.addEventListener(
        "scroll",
        toggleBackToTopButton,
        {
            passive: true
        }
    );

    toggleBackToTopButton();
}

/* =====================================================
   CURRENT YEAR
===================================================== */

function updateCurrentYear() {
    const currentYear =
        new Date().getFullYear();

    const yearElements =
        document.querySelectorAll(
            ".current-year, #currentYear"
        );

    yearElements.forEach((element) => {
        element.textContent =
            currentYear;
    });
}

/* =====================================================
   LOTTIE FALLBACK
===================================================== */

function initializeLottieFallback() {
    const lottiePlayers =
        document.querySelectorAll(
            "dotlottie-player"
        );

    lottiePlayers.forEach((player) => {
        player.addEventListener(
            "error",
            () => {
                const container =
                    player.closest(
                        ".animation-container"
                    );

                if (container) {
                    container.style.display =
                        "none";
                }
            }
        );
    });
}

/* =====================================================
   CONTACT FORM PROTECTION
===================================================== */

function initializeContactForm() {
    const contactForm =
        document.querySelector(
            ".contact-form"
        );

    if (!contactForm) return;

    const action =
        contactForm.getAttribute(
            "action"
        );

    if (!action || action === "#") {
        contactForm.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                alert(
                    "The contact form is not connected yet. Please email me directly at makendracrosby100@gmail.com."
                );
            }
        );
    }
}

/* =====================================================
   IMAGE FALLBACKS
===================================================== */

function initializeImageFallbacks() {
    const projectImages =
        document.querySelectorAll(
            ".project-card img"
        );

    const fallbackImage =
        "assets/images/projects/coming-soon.png";

    projectImages.forEach((image) => {
        image.addEventListener(
            "error",
            () => {
                if (
                    image.src.includes(
                        "coming-soon.png"
                    )
                ) {
                    image.style.display =
                        "none";

                    return;
                }

                image.src =
                    fallbackImage;

                image.alt =
                    "Project coming soon";
            }
        );
    });
}

/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        headerShadow();

        initializeNavigation();

        initializeTypingEffects();

        initializeScrollReveal();

        initializeParticles();

        initializeProjectFilters();

        initializeExperienceSection();

        initializeProjectModal();

        initializeSmoothScrolling();

        initializeResumeButtons();

        initializeBackToTopButton();

        updateCurrentYear();

        initializeLottieFallback();

        initializeContactForm();

        initializeImageFallbacks();

        window.addEventListener(
            "scroll",
            headerShadow,
            {
                passive: true
            }
        );
    }
);
