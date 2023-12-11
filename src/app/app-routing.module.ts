import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  { path:'', redirectTo: 'figurine', pathMatch: 'full' },  // Defautl Route with pathMath to avoid "side effects"
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
