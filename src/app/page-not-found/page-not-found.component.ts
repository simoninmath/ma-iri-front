import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <h1>404 error! Page not found</h1>
      <a routerLink="/figurine" class="waves-effect waves-teal btn-flat">Go back</a>
      <img src="https://3dminis-factory.com/45293-thickbox_default/alien-stingray-eggs-protect.jpg" />
    </div>
  `
})

export class PageNotFoundComponent {}
