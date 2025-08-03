// Reveal each tip one by one on scroll
const tipCards = document.querySelectorAll(".tip-card");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.95;

    tipCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
