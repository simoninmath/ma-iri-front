import { Component } from '@angular/core';
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

}
