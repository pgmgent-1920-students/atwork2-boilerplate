import { Router, routes } from './router';
import { HomePage, AboutPage } from './pages';
import { Header } from './components';

class App {
  constructor (container) {
    // Root container
    this.container = container;

    // Pages
    this.pageHome = new HomePage();
    this.pageAbout = new AboutPage();

    // Components
    this.compHeader = new Header();    
  }

  async render () {
    return `
    ${await this.compHeader.render()}
    <div id="children"></div>
    `;
  }

  async afterRender () {
    this.childrenContainer = document.getElementById('children');
    // Router
    this.router = new Router(this.childrenContainer);
    this.router.addRoute(routes.LANDING, this.pageHome);
    this.router.addRoute(routes.HOME, this.pageHome);
    this.router.addRoute(routes.ABOUT, this.pageAbout);
  }
}

export default App;
