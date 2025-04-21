const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Set theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
      html.setAttribute('data-bs-theme', 'dark');
      toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
      const isDark = toggle.checked;
      html.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });