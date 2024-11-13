import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

console.log('hallo ini sudah running');

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});


document.addEventListener('DOMContentLoaded', () => {
  const skipLinkElem = document.querySelector('.skip-link');
  skipLinkElem.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#mainContent').focus();
  });
});



