import { BAAS } from '../services';

import { routes } from '../router';

class HomePage {
  constructor() {

  }

  async getPosts () {
    const posts = await BAAS.getPosts();
    return posts.map((post) => {
      return `
      <div class="post">
        <h1>${post.title}</h1>
        <a href="#!${routes.POST_DETAIL.replace(':id', post.id)}">Details</a>
      </div>`
    });
  }

  async render () {
    return `
      <div class="page page--home">
        ${await this.getPosts()}
      </div>
    `;
  }

  async afterRender () {
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
