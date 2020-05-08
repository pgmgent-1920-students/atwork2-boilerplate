import Navigo from 'navigo';

class Router {
  constructor (container) {
    this.container = container;
    this.router = new Navigo(null, true, '#!');
  }

  addRoute (location, page) {
    this.router.on(
      location,
      async (params) => {
        this.container.innerHTML = await page.render(params);
      },
      {
        before: async (done, params) => {
          await page.mount();
          done();
        },
        after: async (params) => {
          await page.afterRender();
        },
        leave: async () => {
          await page.unmount();
        },
      }
    )
      .resolve();
  }

  setNotFoundPage (page) {
    this.router.notFound(
      async (query) => {
        this.container.innerHTML = await page.render();
      }
    );
  }
}

export default Router;
