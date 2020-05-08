class NotFoundPage {

  async render () {
    return `
      <div class="page page--404">
        <a href="home" data-navigo>Home</a>
      </div>	
    `;
  }
}

export default NotFoundPage;
