import { PostsListPaged } from '../components';

class BlogPage {
  constructor () {
    this.compPostsListPaged = new PostsListPaged(1);
  }

  async render () {
    return `
      <div class="page page--blog">
        <h1>BLOG</h1>
        <div class="container">
          ${await this.compPostsListPaged.render()}
        </div>  
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compPostsListPaged.afterRender();
    
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
