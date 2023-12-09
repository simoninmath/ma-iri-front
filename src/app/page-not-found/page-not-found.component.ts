import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" />
      <h1>Hey ! Cette page n'existe pas !</h1>
      <a routerLink="/figurine" class="waves-effect waves-teal btn-flat">Retour à l'accueil</a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
