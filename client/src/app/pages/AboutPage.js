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
