/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["makendra here.", "welcome to my personal eportfolio!", "take a look around."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.gif-container', { delay: 200 });

/* -- PROJECT BOX -- */
/* --sr.reveal('.project-box', { interval: 200 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/*function openPopup(box) {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');

  // Get the data attributes from the clicked box
  const title = box.getAttribute('data-title');
  const description = box.getAttribute('data-description');
  const link = box.getAttribute('data-link');

  // Set the modal content
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalLink.href = link;

  // Show the modal
  modal.style.display = "block";
}

// Close modal when clicking on the close button
document.querySelector('.close').onclick = function() {
  document.getElementById('project-modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
      modal.style.display = "none";
  }
}
*/


/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */


/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ----- PARTICLES CONFIG ----- */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#c850c0" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 4 },
        "line_linked": { "enable": true, "distance": 150, "color": "#d291bc", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 3, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});

/* ----- PROJECT FILTERING ----- */
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        projectCards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* ----- EXPERIENCE CLICK-THROUGH ----- */
const expTitles = document.querySelectorAll(".exp-title");
expTitles.forEach(title => {
    title.addEventListener("click", () => {
        const details = title.nextElementSibling;
        const toggle = title.querySelector(".toggle-btn");
        if (details.style.display === "none") {
            details.style.display = "block";
            toggle.classList.add("active");
        } else {
            details.style.display = "none";
            toggle.classList.remove("active");
        }
    });
});

