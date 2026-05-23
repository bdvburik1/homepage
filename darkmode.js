const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const skillContainer = document.querySelector(".skills__tags");
const body = document.body;
//darkmode
function updateIcon() {
    icon.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
}
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}
updateIcon();
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        body.classList.contains("dark") ? "dark" : "light"
    );
    updateIcon();
});

//easter egg
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