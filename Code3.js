const PROJECTS = [
  { title: "Movie Streaming App", type: "android", desc: "Android app with Room DB and downloads." },
  { title: "Smart Budgeting App", type: "no-code", desc: "Budget app built with Glide." },
  { title: "Portfolio Website", type: "web", desc: "Responsive portfolio built with HTML, CSS, and JS." },
  { title: "Profile Screen UI", type: "android", desc: "Profile UI with settings and Firebase." },
];

const projectsList = document.getElementById("projectsList");

function renderProjects(list) {
  projectsList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<div><strong>${p.title}</strong><p>${p.desc}</p></div>`;
    div.onclick = () => openModal(p);
    projectsList.appendChild(div);
  });
}
renderProjects(PROJECTS);

function filterProjects(type) {
  if (type === "all") renderProjects(PROJECTS);
  else renderProjects(PROJECTS.filter(p => p.type === type));
}

const modal = document.getElementById("modal");
function openModal(p) {
  document.getElementById("modalContent").innerHTML = `<h2>${p.title}</h2><p>${p.desc}</p>`;
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}

function handleContact(e) {
  e.preventDefault();
  alert("Thanks for your message! (Form demo only)");
  e.target.reset();
}

function copyEmail() {
  navigator.clipboard.writeText("sakshimangulkar@example.com");
  alert("Email copied to clipboard!");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
