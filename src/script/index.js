const html = document.documentElement;
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    sun.style.display = "inline-block";
    moon.style.display = "none";
  } else {
    sun.style.display = "none";
    moon.style.display = "inline-block";
  }
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

sun.addEventListener("click", () => setTheme("light"));
moon.addEventListener("click", () => setTheme("dark"));
