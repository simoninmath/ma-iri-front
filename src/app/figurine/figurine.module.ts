import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';
import { BorderCardDirective } from './border-card.directive';
import { FigurineTypeColorPipe } from './figurine-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FigurineService } from './figurine.service';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(figurineRoutes)
  ],
  providers: [FigurineService]
})

export class FigurineModule { }
