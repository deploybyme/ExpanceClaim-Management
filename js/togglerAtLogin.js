const toggle = document.getElementById('themeToggle');
let labelToggle = document.getElementById('labelToggle');
const html = document.documentElement;

// Load from localStorage
if (localStorage.getItem('theme') === 'dark') {
  html.setAttribute('data-bs-theme', 'dark');
  toggle.checked = true;
  labelToggle.innerHTML = 'Light Mode'
}

toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  html.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  labelToggle.innerHTML = isDark ? 'Light Mode' : 'Dark Mode'
});