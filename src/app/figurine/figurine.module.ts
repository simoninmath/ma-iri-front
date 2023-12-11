import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';
import { BorderCardDirective } from './border-card.directive';
import { FigurineTypeColorPipe } from './figurine-type-color.pipe';


@NgModule({
  declarations: [
    ListFigurineComponent,
    DetailFigurineComponent,
    BorderCardDirective,
    FigurineTypeColorPipe
  ],
  imports: [
    CommonModule
  ]
})

export class FigurineModule { }
