import 'regenerator-runtime';
// css
import '../styles/root.css';
import '../styles/hero.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/loader.css';

// js
import './component/app-bar';
import './view/navigation';
import './component/footer-section';

import registerSW from './utils/register-sw';
import Main from './view/view';

document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  Main.renderPage();
});

window.addEventListener('hashchange', () => {
  Main.renderPage();
});
