import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

// Refactoring
export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn) {
    return true;
  }

  router.navigate(['/login']);
  return false;
}


/* @Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): boolean {
    // If User is logged in, access granted
    if(this.authService.isLoggedIn){
      return true;
    }
    // Else, redirect User on login page
    this.router.navigate(['/login']);
    return false;
  }
} */
