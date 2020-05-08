class Header {
  async render () {
    return `
      <header class="header">
        <a href="home" data-navigo>Home</a>
        <a href="about" data-navigo>About</a>
      </header>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default Header;
