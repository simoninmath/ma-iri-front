import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Figurine } from '../figurine';
import { FigurineService } from '../figurine.service';

@Component({
  selector: 'app-list-figurine',
  templateUrl: './list-figurine.component.html',
  styles: [
  ]
})

export class ListFigurineComponent {

  figurineList: Figurine[];  // Type as a Table of Figurine

  constructor(
    private router: Router,
    private figurineService: FigurineService
    ) {}
    
  goToFigurine(figurine: Figurine) {   // Go back Method
    this.router.navigate(['/figurine', figurine.id]);
  };

  ngOnInit() {
    this.figurineList = this.figurineService.getFigurineList();
  }

}
