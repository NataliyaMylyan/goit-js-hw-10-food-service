import './styles.css';
import itemsTemplate from '../src/menu-item.hbs';
import menu from './menu.json';

const markup = itemsTemplate(menu);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

const switchToggleRef = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkStorage(switchToggleRef);

switchToggleRef.addEventListener('change', event => {
  !event.target.checked ? setLightTheme(Theme) : setDarkTheme(Theme);
});

function checkStorage(item) {
  document.body.classList.add(localStorage.getItem('Theme'));

  if (localStorage.getItem('Theme') === 'dark-theme') {
    item.checked = !item.checked;
  }
}

function setLightTheme(item) {
  document.body.classList.remove(item.DARK);
  document.body.classList.add(item.LIGHT);
  localStorage.setItem('Theme', 'light-theme');
}

function setDarkTheme(item) {
  document.body.classList.remove(item.LIGHT);
  document.body.classList.add(item.DARK);
  localStorage.setItem('Theme', 'dark-theme');
}
