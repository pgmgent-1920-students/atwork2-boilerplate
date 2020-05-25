import { BAAS } from '../services';

import { routes } from '../router';

class PostsListPaged {
  constructor (itemsPerPage = 10) {
    this.itemsPerPage = itemsPerPage;
  }

  async getPosts (color) {
    let posts = await BAAS.getPosts();
    this.currentPage = 1;
    this.totalPages = Math.ceil(posts.length / this.itemsPerPage);

    const postsHtml = posts.map(post => `
      <div class="col-12 col-md-6 col-lg-4" data-visible="false">
        <div class="card card--${color} posts-list__item">
          <picture class="card__picture picture">
            <img src="${post.thumbnailUrl}" />
          </picture>
          <h1 class="card__sub-title sub-title">${post.category ? post.category : 'News'}</h1>
          <h1 class="card__title title">${post.title}</h1>
          <a class="card__readmore" href="#!${routes.POST_DETAIL.replace(':id', post.id)}">Read more</a>
        </div>
      </div>`).join('');

    const pages = Array(this.totalPages).fill(1);
    const pagingHtml = pages.map((page, index) => `
    <span class="page-number" data-number="${index+1}">
    ${index + 1}
    </span>`).join('');

    return `
      <div class="row posts-list">
        ${postsHtml}
      </div>
      <div class="row posts-list-paging">
        <div class="col-12">
          ${pagingHtml}
        </div>
      </div>
    `;
  }

  async render (color) {
    return `
      <div class="posts-list-container">
        ${await this.getPosts(color)}     
      </div>
    `;
  }

  async afterRender () {
    this.updatePostListItems();

    const postsListPageElements = document.querySelectorAll('.posts-list-paging > div > span');
    if (postsListPageElements) {
      postsListPageElements.forEach((elem, index) => {
        elem.addEventListener('click', (ev) => {
          const prevPage = this.currentPage;
          this.currentPage = parseInt(elem.dataset.number);

          if (this.currentPage !== prevPage) {
            this.updatePostListItems();
          }          
        })
      });
    }

    // Connect the listeners
    return this;
  }

  updatePostListItems () {
    const postsListItemContainerElements = document.querySelectorAll('.posts-list > div');
    if (postsListItemContainerElements) {
      postsListItemContainerElements.forEach((elem, index) => {
        if ((index) >= ((this.currentPage-1)*this.itemsPerPage) && (index) < ((this.currentPage-1)*this.itemsPerPage + this.itemsPerPage)) {
          elem.dataset.visible = true
        } else {
          elem.dataset.visible = false
        }
      });
    }
  }
}

export default PostsListPaged;
