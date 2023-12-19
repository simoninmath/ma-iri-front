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
import { SearchFigurineComponent } from './search-figurine/search-figurine.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const figurineRoutes: Routes = [
  { path:'edit/figurine/:id', title: 'Edit Figurine', component: EditFigurineComponent, canActivate: [AuthGuard] },
  { path:'figurine/add', title: 'Add Figurine', component: AddFigurineComponent, canActivate: [AuthGuard] },
  { path:'figurine', title: 'Figurine Manager', component: ListFigurineComponent, canActivate: [AuthGuard] },
  { path:'figurine/:id', title: 'Figurine Manager', component: DetailFigurineComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    ListFigurineComponent,
    DetailFigurineComponent,
    BorderCardDirective,
    FigurineTypeColorPipe,
    FigurineFormComponent,
    EditFigurineComponent,
    AddFigurineComponent,
    SearchFigurineComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(figurineRoutes)
  ],
  providers: [FigurineService]
})

export class FigurineModule { }
