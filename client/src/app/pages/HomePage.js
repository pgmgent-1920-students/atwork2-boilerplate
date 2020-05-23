import { routes } from '../router';

import { PostsList } from '../components';

class HomePage {
  constructor () {
    this.compPostsList = new PostsList(3);
  }

  async render () {
    return `
      <div class="page page--home">
        <div class="container">
          <span class="btn">Activate</span>
          ${await this.compPostsList.render()}
        </div>        
      </div>
    `;
  }

  async afterRender () {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', (ev) => {
      console.log(ev);
    });

    // afterRender all components on the page
    this.compPostsList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default HomePage;
