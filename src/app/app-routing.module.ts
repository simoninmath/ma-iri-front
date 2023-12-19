import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const mainRoutes: Routes = [
  { path:'', title: 'Figurine Manager', redirectTo: 'login', pathMatch: 'full' },  // Defautl Route with pathMath to avoid "side effects"
  { path:'login', title: 'Figurine Manager', component: LoginComponent },
  { path:'**', title: '404 error', component: PageNotFoundComponent }
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
