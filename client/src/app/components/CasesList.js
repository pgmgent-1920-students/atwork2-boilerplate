import { BAAS } from '../services';

import { routes } from '../router';

class CasesList {
  constructor (n = null) {
    this.n = n;
  }

  async getCases (color) {
    let cases = await BAAS.getCases();
    if (this.n !== null) {
      cases = cases.slice(0, this.n);
    }
    return cases.map(project => `
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
  }

  async render (color) {
    return `
      <div class="row cases-list">
        ${await this.getCases(color)}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default CasesList;
