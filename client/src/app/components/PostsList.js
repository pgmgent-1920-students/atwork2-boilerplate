import { BAAS } from '../services';

import { routes } from '../router';

class PostsList {
  constructor (n = null) {
    this.n = n;
  }

  async getPosts (color) {
    let posts = await BAAS.getPosts();
    if (this.n !== null) {
      posts = posts.slice(0, this.n);
    }
    return posts.map(post => `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card card--${color} posts-list__item">
          <picture class="card__picture picture">
            <img src="${post.thumbnailUrl}" />
          </picture>
          <h1 class="card__sub-title sub-title">${post.category ? post.category : 'News'}</h1>
          <h1 class="card__title title">${post.title}</h1>
          <a class="card__readmore" href="#!${routes.POST_DETAIL.replace(':id', post.id)}">Read more</a>
        </div><span class="btn-sla">SLA</div>
      </div>`).join('');
  }

  async render (color) {
    return `
      <div class="row posts-list">
        ${await this.getPosts(color)}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const slaElements = document.querySelectorAll('.btn-sla');
    slaElements.forEach(elem => elem.addEventListener('click', ev => console.log(ev)))
    return this;
  }
}

export default PostsList;
