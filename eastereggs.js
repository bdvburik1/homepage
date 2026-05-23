const easterSkills = [
    "CSS Wizardry",
    "DOM Whispering",
    "Quantum Reproducibility",
    "Bug Summoning Control",
    "JavaScript Necromancy",
    "Async Time Travel",
    "Telepathy Debugging",
];
const skillContainer = document.querySelector(".skills__tags");
function addSkill(name) {
    const exists = [...skillContainer.querySelectorAll("span")]
        .some(el => el.textContent === name);
    if (exists) return;
    const span = document.createElement("span");
    span.textContent = name;
    skillContainer.appendChild(span);
}
function handleSkillClick() {
    const random =
        easterSkills[Math.floor(Math.random() * easterSkills.length)];

    addSkill(random);
}
skillContainer.addEventListener("click", (e) => {
    if (e.target.tagName !== "SPAN") return;
    handleSkillClick();
});