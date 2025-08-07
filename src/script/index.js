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

sun.addEventListener("click", () => {
  if (!document.startViewTransition) {
    setTheme("light");
    return;
  }
  document.startViewTransition(() => setTheme("light"));
});
moon.addEventListener("click", () => {
  if (!document.startViewTransition) {
    setTheme("dark");
    return;
  }
  document.startViewTransition(() => setTheme("dark"));
});

// // Initialize the gradient background
// let gradientBackground;

// window.addEventListener("load", () => {
//   gradientBackground = new AnimatedGradientBackground();
// });

// // Cleanup on page unload
// window.addEventListener("beforeunload", () => {
//   if (gradientBackground) {
//     gradientBackground.destroy();
//   }
// });

const shape = document.getElementsByClassName("shape");
document.addEventListener("mouseover", () => {
  for (let i = 0; i < shape.length; i++) {
    shape[i].style.transform = `translateX(${
      Math.random() * (i % 2 === 0 ? 100 : -100)
    }px)`;
  }
});
const spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const currentTheme = document.documentElement.getAttribute("data-theme");

  const spotlightColor =
    currentTheme === "dark"
      ? `radial-gradient(circle at ${x}px ${y}px, rgba(72, 61, 139, 0.4) 0%, rgba(138, 43, 226, 0.2) 20%, transparent 40%)`
      : `radial-gradient(circle at ${x}px ${y}px, rgba(255, 183, 77, 0.4) 0%, rgba(255, 105, 180, 0.2) 20%, transparent 40%)`;

  spotlight.style.background = spotlightColor;
});

// Animated Menu
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};
