import { BAAS } from '../services';

class HomePage {
  constructor() {

  }

  async getPosts () {
    const posts = await BAAS.getPosts();
    console.log(posts);
    return posts.map((post) => {
      return `
      <div class="Post">
      ${post.title}
      </div>
      `
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
