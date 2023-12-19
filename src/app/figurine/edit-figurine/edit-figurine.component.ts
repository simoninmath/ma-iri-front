import { Component, OnInit } from '@angular/core';
import { Figurine } from '../figurine';
import { FigurineService } from '../figurine.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-figurine',
  template: `
    <h2 class="center blue-grey darken-2"> {{ figurine?.name }} </h2>
    <p *ngIf="figurine" class="center">
      <img [src]="figurine.picture"/>
    </p>
    <!-- use ngIf and property binding to bond @Input form figurine-form Component -->
    <app-figurine-form *ngIf="figurine" [figurine]="figurine"></app-figurine-form>
  `,
  styles: [
  ]
})
export class EditFigurineComponent implements OnInit {

  figurine: Figurine | undefined;

  constructor(
    private route: ActivatedRoute,
    private figurineService: FigurineService,
    private title: Title
  ){}

  // Get the URL and figurine id, if it's right, return the selected figurine, else undefined
  ngOnInit() {
    const figurineId: string | null = this.route.snapshot.paramMap.get('id');
    if(figurineId) {
      this.figurineService.getFigurineById(+figurineId).subscribe(figurine => {  // Get dynamic titles in edit section
        this.figurine = figurine;
        this.initTitle(figurine);
  });
  }
}

  // ngOnInit() {
  //   const figurineId: string | null = this.route.snapshot.paramMap.get('id');
  
  //   if(figurineId) {
  //     this.figurine = this.figurineService.getFigurineById(+figurineId);
  //   } else {
  //     this.figurine = undefined;
  //   }
  // }

  initTitle(figurine: Figurine | undefined){
    if(!figurine){
      this.title.setTitle('This Figurine doesn\'t exist...');
      return;
    }
    this.title.setTitle(figurine.name);
  }

}
