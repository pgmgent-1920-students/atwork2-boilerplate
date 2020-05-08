import { routes } from '../router';

class Header {
  async render () {
    return `
      <header class="header">
        <a href="${routes.HOME}" data-navigo>Home</a>
        <a href="${routes.ABOUT}" data-navigo>About</a>
      </header>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default Header;
