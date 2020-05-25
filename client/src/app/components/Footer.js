import { routes } from '../router';

class Footer {
  async render () {
    return `
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-3">
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
            <div class="col-12 col-md-6 col-xl-3">
              <section class="footer-section">
                <h1 class="footer-section__title">Algemeen</h1>
                <ul class="footer-section__list">
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/hoe-ziet-je-opleiding-eruit" target="_blank" rel="noopener noreferrer">Hoe ziet de opleiding eruit?</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/waarvoor-kies-je" target="_blank" rel="noopener noreferrer">Waarvoor kies je?</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/wat-zal-je-leren-0" target="_blank" rel="noopener noreferrer">Wat zal je leren?</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/wat-na-je-opleiding-0" target="_blank" rel="noopener noreferrer">Wat na je opleiding?</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/praktische-info-en-veel-gestelde-vragen" target="_blank" rel="noopener noreferrer">Praktische info</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/starten-februari" target="_blank" rel="noopener noreferrer">Starten in februari</a></li>
                </ul>
              </section>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <section class="footer-section">
                <h1 class="footer-section__title">Afstudeerrichtingen</h1>
                <ul class="footer-section__list">
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/crossmedia-ontwerp" target="_blank" rel="noopener noreferrer">Crossmedia-ontwerp</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafimediabeleid" target="_blank" rel="noopener noreferrer">Grafimediabeleid</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/new-media-development-multimediaproductie" target="_blank" rel="noopener noreferrer">New Media Development</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/audiovisual-design-multimediaproductie" target="_blank" rel="noopener noreferrer">Audiovisual Design</a></li>
                </ul>
              </section>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <section class="footer-section">
                <h1 class="footer-section__title">Gerelateerde opleidingen</h1>
                <ul class="footer-section__list">
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren" target="_blank" rel="noopener noreferrer">Graduaat Programmeren</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/international-graphic-and-digital-media" target="_blank" rel="noopener noreferrer">International Graphic and Digital Media</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/postgraduaat/experience-architect" target="_blank" rel="noopener noreferrer">Experience Architect</a></li>
                  <li class="footer-section__item"><a href="https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing" target="_blank" rel="noopener noreferrer">Masterclasses 3D modeling & printing</a></li>
                </ul>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <section class="footer-section footer-section--social">
                <h1 class="hidden footer-section__title">Social media</h1>
                <p class="text-center">
                  <a href="https://www.facebook.com/GrafischeendigitalemediaArteveldehogeschool/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/madebygdm/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                  <a href="https://twitter.com/arteveldegdm" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                  <a href="https://www.youtube.com/channel/UC19xkV3NDwoYlwjr4UvNwhg" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                  <a href="https://github.com/gdmgent" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                </p>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <section class="footer-section footer-section--terms d-flex flex-column justify-content-center align-items-center">
                <h1 class="hidden footer-section__title">Terms</h1>
                <p>Copyright &copy; ${new Date().getUTCFullYear()} gdm.gent.</p>
                <p>
                  <a href="https://www.arteveldehogeschool.be/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</a>
                  <a href="https://www.arteveldehogeschool.be/cookiebeleid" target="_blank" rel="noopener noreferrer">Cookiebeleid</a>
                  <a href="https://www.arteveldehogeschool.be/privacybeleid" target="_blank" rel="noopener noreferrer">Privacybeleid</a>
                </p>
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

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.footer-section__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.footer-section__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }    
  }
}

export default Footer;
