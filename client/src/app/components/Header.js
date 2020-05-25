import { routes } from '../router';

class Header {
  async render () {
    return `
      <header class="header">
        <div class="header__hamburger">HAMB</div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="brand">
              </div>
              <nav class="nav">
                <ul class="nav__list">
                  <li class="nav__item"><a href="${routes.HOME}" data-navigo>Home</a></li>
                  <li class="nav__item"><a href="${routes.ABOUT}" data-navigo>About</a></li>
                  <li class="nav__item"><a href="${routes.BLOG}" data-navigo>Blog</a></li>
                  <li class="nav__item"><a href="${routes.TEAM}" data-navigo>Team</a></li> 
                  <li class="nav__item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
                </ul>
              </nav>
              <div class="btn-hamburger">HAMB</div>
            </div>                        
          </div>
        </div>        
      </header>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const btnHamburger = document.querySelector('.btn-hamburger');
    btnHamburger.addEventListener('click', (ev) => {
      console.log(ev);
    });
    return this;
  }

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.nav__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.nav__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }    
  }
}

export default Header;
