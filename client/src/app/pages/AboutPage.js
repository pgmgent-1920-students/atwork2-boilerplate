class AboutPage {

  async render () {
    return `
      <div class="page page--about">
        ABOUT
      </div>	
    `;
  }

  async afterRender () {
    // Connect the listeners
  }

  async mount () {
    // Before the rendering of the page
  }

  async unmount () {
    // After leaving the page
  }
}

export default AboutPage;