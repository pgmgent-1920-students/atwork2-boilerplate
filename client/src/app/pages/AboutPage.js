class AboutPage {
  constructor () {
  }

  async render () {
    return `
      <div class="page page--about">
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    
    // Before the rendering of the page
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

export default AboutPage;
