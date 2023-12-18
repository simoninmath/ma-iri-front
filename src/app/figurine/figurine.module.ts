import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';
import { BorderCardDirective } from './border-card.directive';
import { FigurineTypeColorPipe } from './figurine-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FigurineService } from './figurine.service';
import { FormsModule } from '@angular/forms';
import { FigurineFormComponent } from './figurine-form/figurine-form.component';
import { EditFigurineComponent } from './edit-figurine/edit-figurine.component';
import { AddFigurineComponent } from './add-figurine/add-figurine.component';

const figurineRoutes: Routes = [
  { path:'edit/figurine/:id', component: EditFigurineComponent },
  { path:'figurine/add', component: AddFigurineComponent },
  { path:'figurine', component: ListFigurineComponent },
  { path:'figurine/:id', component: DetailFigurineComponent }
];

@NgModule({
  declarations: [
    ListFigurineComponent,
    DetailFigurineComponent,
    BorderCardDirective,
    FigurineTypeColorPipe,
    FigurineFormComponent,
    EditFigurineComponent,
    AddFigurineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(figurineRoutes)
  ],
  providers: [FigurineService]
})

export class FigurineModule { }
