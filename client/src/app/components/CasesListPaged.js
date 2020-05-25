import { BAAS } from '../services';

import { routes } from '../router';

class CasesListPaged {
  constructor (itemsPerPage = 10) {
    this.itemsPerPage = itemsPerPage;
  }

  async getCases (color) {
    let cases = await BAAS.getCases();
    this.currentPage = 1;
    this.totalPages = Math.ceil(cases.length / this.itemsPerPage);

    const casesHtml = cases.map(project => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card card--${color} cases-list__item">
        <picture class="card__picture picture">
          <img src="${project.picture}" />
        </picture>
        <h1 class="card__sub-title sub-title">${project.course ? project.course : 'Not specified'}</h1>
        <h1 class="card__title title">${project.title}</h1>
        <a class="card__readmore" href="#!${routes.CASE_DETAIL.replace(':id', project.id)}">Read more</a>
      </div>
    </div>`).join('');

    const pages = Array(this.totalPages).fill(1);
    const pagingHtml = pages.map((page, index) => `
    <span class="page-number" data-number="${index+1}">
    ${index + 1}
    </span>`).join('');

    return `
      <div class="row cases-list">
        ${casesHtml}
      </div>
      <div class="row cases-list-paging">
        <div class="col-12">
          ${pagingHtml}
        </div>
      </div>
    `;
  }

  async render (color) {
    return `
      <div class="cases-list-container">
        ${await this.getCases(color)}     
      </div>
    `;
  }

  async afterRender () {
    this.updatePostListItems();

    const casesListPageElements = document.querySelectorAll('.cases-list-paging > div > span');
    if (casesListPageElements) {
      casesListPageElements.forEach((elem, index) => {
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
    const casesListItemContainerElements = document.querySelectorAll('.cases-list > div');
    if (casesListItemContainerElements) {
      casesListItemContainerElements.forEach((elem, index) => {
        if ((index) >= ((this.currentPage-1)*this.itemsPerPage) && (index) < ((this.currentPage-1)*this.itemsPerPage + this.itemsPerPage)) {
          elem.dataset.visible = true
        } else {
          elem.dataset.visible = false
        }
      });
    }
  }
}

export default CasesListPaged;
