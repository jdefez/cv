var switchElement = document.querySelector('[name="theme_switch"]');
var rootElement = document.querySelector('body');
var toggleTheme = function() {
  if (switchElement.checked) {
    rootElement.dataset.theme = 'dark';
  } else {
    rootElement.dataset.theme = 'light';
  }
};
switchElement.addEventListener('change', toggleTheme);
