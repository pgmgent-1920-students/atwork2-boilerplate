import { CasesListPaged } from '../components';

class CasesPage {
  constructor () {
    this.compCasesListPaged = new CasesListPaged(8);
  }

  async render () {
    return `
      <div class="page page--cases">
        <h1>CASES<h1>
        <div class="container">
          ${await this.compCasesListPaged.render('blue')}
        </div> 
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compCasesListPaged.afterRender();

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

export default CasesPage;
