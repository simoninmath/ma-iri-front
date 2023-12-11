import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';
import { BorderCardDirective } from './border-card.directive';
import { FigurineTypeColorPipe } from './figurine-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';

const figurineRoutes: Routes = [
  { path:'figurine', component: ListFigurineComponent },
  { path:'figurine/:id', component: DetailFigurineComponent }
];

@NgModule({
  declarations: [
    ListFigurineComponent,
    DetailFigurineComponent,
    BorderCardDirective,
    FigurineTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(figurineRoutes)
  ]
})

export class FigurineModule { }
