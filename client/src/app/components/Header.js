import { routes } from '../router';

class Header {
  async render () {
    return `
      <header class="header">
        <div class="container">
          <div class="row">
            <a href="${routes.HOME}" data-navigo>Home</a>
            <a href="${routes.CASES}" data-navigo>Cases</a>
            <a href="${routes.TEAM}" data-navigo>Team</a>
            <a href="${routes.ABOUT}" data-navigo>About</a>
          </div>
        </div>        
      </header>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default Header;
