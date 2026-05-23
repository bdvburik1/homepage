const skillContainer = document.querySelector(".skills__tags");

const easterSkills = [
    "CSS Wizardry",
    "DOM Whispering",
    "Quantum Reproducibility",
    "Bug Summoning Control",
    "JavaScript Necromancy",
    "Async Time Travel",
    "Telepathy Debugging",
];

function addSkill(name) {
    const exists = [...document.querySelectorAll(".skills__tags span")]
        .some(el => el.textContent === name);
    if (exists) return;
    const span = document.createElement("span");
    span.textContent = name;
    span.addEventListener("click", handleSkillClick);
    skillContainer.appendChild(span);
}
function handleSkillClick(e) {
    const random = easterSkills[Math.floor(Math.random() * easterSkills.length)];
    addSkill(random);
}
// attach to existing
document.querySelectorAll(".skills__tags span")
    .forEach(el => el.addEventListener("click", handleSkillClick));