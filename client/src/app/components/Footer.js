import { routes } from '../router';

class Footer {
  async render () {
    return `
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
              <section class="footer-section">
                <h1 class="footer-section__title">gdm.gent</h1>
                <ul class="footer-section__list">
                  <li class="footer-section__item"><a href="${routes.HOME}" data-navigo>Home</a></li>
                  <li class="footer-section__item"><a href="${routes.ABOUT}" data-navigo>About</a></li>
                  <li class="footer-section__item"><a href="${routes.BLOG}" data-navigo>Blog</a></li>
                  <li class="footer-section__item"><a href="${routes.CASES}" data-navigo>Cases</a></li>
                  <li class="footer-section__item"><a href="${routes.TEAM}" data-navigo>Team</a></li> 
                  <li class="footer-section__item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
                </ul>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <section class="footer-section">
                <h1 class="hidden footer-section__title">Social media</h1>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <section class="footer-section">
                <h1 class="hidden footer-section__title">Terms</h1>
              </section>
            </div>
          </div>
        </div>      
      </footer>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default Footer;
