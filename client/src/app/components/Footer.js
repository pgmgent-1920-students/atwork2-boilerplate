import { routes } from '../router';

class Footer {
  async render () {
    return `
      <footer class="footer">
        FOOTER      
      </footer>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default Footer;
