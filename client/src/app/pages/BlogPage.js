class BlogPage {
  async render () {
    return `
      <div class="page page--blog">
        <h1>BLOG<h1>
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

export default BlogPage;
