import { routes } from '../router';

import { PostsList } from '../components';

class HomePage {
  constructor () {
    this.compPostsList = new PostsList(3);
  }

  async render () {
    return `
      <div class="page page--home">
        <section class="section section--red">
          <div class="container">
            <header class="section__header">
              <div class="row">
                <div class="col-12">
                  <h1 class="section__title">
                  You can visit,<br> <mark>our <br>infodag@home <br>on the Web</mark>
                  </h1>
                </div>
                <div class="col-12">
                  <p class="section__intro"">
                  De volgende infodag op 25 April 2020 van de opleiding <strong>Grafische en Digitale Media</strong> gaat er net iets anders uitzien. Om het coronavirus in te dijken, zetten wij maximaal in op <strong>afstandsonderwijs en thuiswerk</strong>. Tijdens deze infodag is het dan ook niet mogelijk om een infodag op onze campussen te organiseren. We laten je daarom graag kennismaken met onze opleiding en afstudeerrichtingen door middel van onze infodag@home..
                  </p>
                </div>
              </div>
            </header>
          </div> 
        </section>  
        <section class="section section--green">
          <div class="container">
            <header class="section__header">
              <div class="row">
                <div class="col-12">
                  <h1 class="section__title">
                  You can read,<br> <mark>news <br> about us <br> and programming</mark>
                  </h1>
                </div>
                <div class="col-12">
                  <p class="section__intro"">
                  Lees over activiteiten waaraan we deelnemen maar die we ook zelf organiseren. Internationale samenwerkingen, tentoonstellingen, studenten die wedstrijden winnen ... . <strong>Onze studenten zitten niet stil</strong>!
                  </p>
                </div>
              </div>
            </header>
            <div class="section__body">
              ${await this.compPostsList.render('green')}
            </div>
          </div> 
        </section> 
        <section class="section section--blue">
          <div class="container">
            <header class="section__header">
              <div class="row">
                <div class="col-12">
                  <h1 class="section__title">
                  You can see,<br> <mark>cases <br>made by<br>our students</mark>
                  </h1>
                </div>
                <div class="col-12">
                  <p class="section__intro"">
                  Ontdek de projecten die gerealiseerd zijn door onze <strong>studenten</strong>. Huisstijlen, ontwerp van gebruikersinterfaces, 2D- en 3D animaties, audiovisuele producties, websites, apps ... In onze showcase zie je werken gemaakt door <strong>talenten</strong>.
                  </p>
                </div>
              </div>
            </header>
          </div> 
        </section>     
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compPostsList.afterRender();

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

export default HomePage;
