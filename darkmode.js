const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const body = document.body;

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

