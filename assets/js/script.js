const sentences = [
    "Hi, I'm Makendra.",
    "I am a graduate student studying Data Science & Analytics.",
    "I love working on side projects to build my skills in coding.",
    "I am an aspiring cybersecurity professional",
];

let i = 0;
let j = 0;
let currentSentence = "";
let isDeleting = false;
let isEnd = false;

const typingEffect = document.getElementById("typing-effect");
const description = document.getElementById("description");

function type() {
    if (i === sentences.length) {
        i = 0;
    }

    currentSentence = sentences[i];
    if (isDeleting) {
        description.innerHTML = currentSentence.substring(0, j--);
    } else {
        description.innerHTML = currentSentence.substring(0, j++);
    }

    if (!isDeleting && j === currentSentence.length) {
        isEnd = true;
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && j === 0) {
        isEnd = false;
        i++;
        isDeleting = false;
    }

    let speed = isEnd ? 2000 : isDeleting ? 50 : 150;
    setTimeout(type, speed);
}

window.onload = type;
