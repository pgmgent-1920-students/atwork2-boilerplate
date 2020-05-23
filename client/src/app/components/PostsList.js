import { BAAS } from '../services';

import { routes } from '../router';

class PostsList {
  constructor (n = null) {
    this.n = n;
  }

  async getPosts () {
    let posts = await BAAS.getPosts();
    if (this.n !== null) {
      posts = posts.slice(0, this.n);
    }
    return posts.map(post => `
      <div class="col-12 col-md-6 col-lg-4 post">
        <picture class="post__picture">
          <img src="${post.thumbnailUrl}" />
        </picture>
        <h1 class="post__title">${post.title}</h1>
        <a href="#!${routes.POST_DETAIL.replace(':id', post.id)}">Details</a>
      </div>`).join('');
  }

  async render () {
    return `
      <div class="row posts-list">
        ${await this.getPosts()}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default PostsList;
