import Navigo from 'navigo';

class Router {
  constructor (container) {
    this.container = container;
    this.router = new Navigo(null, true, '#!');
  }

  addRoute (location, page) {
    this.router.on(
      location,
      async () => {
        this.container.innerHTML = await page.render();
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
}

export default Router;
