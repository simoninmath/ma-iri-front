import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Figurine } from '../figurine';
import { FIGURINES } from '../mock-figurine-list';

@Component({
  selector: 'app-list-figurine',
  templateUrl: './list-figurine.component.html',
  styles: [
  ]
})

export class ListFigurineComponent {

  figList: Figurine[] = FIGURINES;  // Type as a Table of Figurine

  constructor(private router: Router) {}
    
  goToFigurine(figurine: Figurine) {  // Go back Method
    this.router.navigate(['/figurine', figurine.id]);
  };

}
