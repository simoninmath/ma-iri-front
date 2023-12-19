import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const mainRoutes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full' },  // Defautl Route with pathMath to avoid "side effects"
  { path:'login', component: LoginComponent },
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
