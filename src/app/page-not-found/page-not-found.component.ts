import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <h1>Hey ! Cette page n'existe pas !</h1>
      <img src="https://3dminis-factory.com/45293-thickbox_default/alien-stingray-eggs-protect.jpg" />
      <a routerLink="/figurine" class="waves-effect waves-teal btn-flat">Retour à l'accueil</a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
