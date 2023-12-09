import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFigurineComponent } from './list-figurine/list-figurine.component';
import { DetailFigurineComponent } from './detail-figurine/detail-figurine.component';

const routes: Routes = [
  { path:'figurine', component: ListFigurineComponent },
  { path:'figurine/:id', component: DetailFigurineComponent },
  { path:'', redirectTo: 'figurine', pathMatch: 'full' }  // Defautl Route with pathMath to avoid "side effects"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
