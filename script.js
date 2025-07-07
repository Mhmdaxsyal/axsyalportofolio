const toggleBtn = document.getElementById("darkModeBtn");
toggleBtn.onclick = () => {
  document.body.classList.toggle("darkModeBtn");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
};