const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  toggleButton.textContent = '☀️ Light Mode';
} else {
  toggleButton.textContent = '🌙 Dark Mode';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  let theme = 'light';
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
  }
  
  localStorage.setItem('theme', theme);
});