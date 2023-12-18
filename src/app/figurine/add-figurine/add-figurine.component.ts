import { Component, OnInit } from '@angular/core';
import { Figurine } from '../figurine';

@Component({
  selector: 'app-add-figurine',
  template: `
    <h2 class="center">Create your own fig!</h2>
    <app-figurine-form [figurine]="figurine"></app-figurine-form>
  `
})
export class AddFigurineComponent implements OnInit {
  
  figurine: Figurine;

  // Create an empty figurine that user can fill
  ngOnInit() {
    this.figurine = new Figurine();
  }

}
