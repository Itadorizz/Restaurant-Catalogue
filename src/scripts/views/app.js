/* eslint-disable linebreak-style */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';


console.log('APP KE LOAD BOSS');
class App {
  constructor({ hamburger, drawer, mainContent }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = mainContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._hamburger,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;